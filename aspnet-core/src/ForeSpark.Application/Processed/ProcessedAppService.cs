using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Abp.Extensions;
using Abp.Linq.Extensions;
using ForeSpark.Processed.Dto;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ForeSpark.Processed
{
    public class ProcessedAppService : AsyncCrudAppService<Processed, ProcessedDto, int, PagedProcessedResultRequestDto, ProcessedDto, ProcessedDto>, IProcessedAppService
    {
        private readonly IRepository<Processed> _processedRepository;
        private readonly IRepository<ProcessedMetadata.ProcessedMetadata> _processedMetadataRepository;

        public ProcessedAppService(IRepository<Processed> processedRepository,
            IRepository<ProcessedMetadata.ProcessedMetadata> processedMetadataRepository) : base(processedRepository)
        {
            _processedRepository = processedRepository;
            _processedMetadataRepository = processedMetadataRepository;
        }

        public async Task<ListResultDto<ProcessedMetadataDto>> GetProcessedMetadata(int requestId)
        {
            var metadata = await _processedRepository.GetAllListAsync(x => x.RequestId == requestId);
            return new ListResultDto<ProcessedMetadataDto>(ObjectMapper.Map<List<ProcessedMetadataDto>>(metadata));
        }

        public override Task<PagedResultDto<ProcessedDto>> GetAllAsync(PagedProcessedResultRequestDto input)
        {
            CheckGetAllPermission();
            var allProcessed = _processedRepository.GetAllIncluding(x => x.Request).Include(x => x.Installations)
                                .WhereIf(!input.Keyword.IsNullOrWhiteSpace(), x => x.RequestId.ToString().Contains(input.Keyword)
                || x.Request.Name.Contains(input.Keyword) || x.Request.Address.Contains(input.Keyword)
                || x.Request.Address.Contains(input.Keyword) || x.Request.CNIC.Contains(input.Keyword)
                || x.Installations.Make.Contains(input.Keyword) || x.Installations.Serial.Contains(input.Keyword))
                .WhereIf(input.CityId.HasValue, x => x.Request.CityId == input.CityId);
            var pagedProcessed = allProcessed.Skip(input.SkipCount).Take(input.MaxResultCount).ToList();
            return Task.FromResult(new PagedResultDto<ProcessedDto>(allProcessed.Count(), ObjectMapper.Map<List<ProcessedDto>>(pagedProcessed)));
        }

        protected override IQueryable<Processed> CreateFilteredQuery(PagedProcessedResultRequestDto input)
        {
            return Repository.GetAllIncluding()
                .WhereIf(!input.Keyword.IsNullOrWhiteSpace(), x => x.InstallationId.ToString().Contains(input.Keyword) || x.RequestId.ToString().Contains(input.Keyword));
        }

        protected override IQueryable<Processed> ApplySorting(IQueryable<Processed> query, PagedProcessedResultRequestDto input)
        {
            return query.OrderByDescending(order => order.CreationTime);
        }
    }
}
