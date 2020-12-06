using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Abp.Extensions;
using Abp.Linq.Extensions;
using ForeSpark.Request.Dto;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System;
using Microsoft.EntityFrameworkCore;

namespace ForeSpark.Request
{
    public class RequestAppService : AsyncCrudAppService<Request, RequestDto, int, PagedRequestResultRequestDto, CreateRequestDto, RequestDto>, IRequestAppService
    {
        private readonly IRepository<Request> _requestRepository;
        private readonly IRepository<RequestImages> _requestImages;
        public RequestAppService(IRepository<Request> requestRepository, 
            IRepository<RequestImages> requestImages) : base(requestRepository)
        {
            _requestRepository = requestRepository;
            _requestImages = requestImages;
        }

        public override Task<PagedResultDto<RequestDto>> GetAllAsync(PagedRequestResultRequestDto input)
        {
            CheckGetAllPermission();
            var allRequests = _requestRepository.GetAllIncluding(x => x.Status)
                .WhereIf(!input.Keyword.IsNullOrWhiteSpace(), x => x.CNIC.Contains(input.Keyword) || x.Name.Contains(input.Keyword) || x.Address.Contains(input.Keyword))
                .WhereIf(!input.Status.IsNullOrWhiteSpace(), x => x.StatusId == (int)Enum.Parse(typeof(RequestStatusEnum), input.Status.ToUpper()))
                .WhereIf(input.CityId.HasValue, x => x.CityId == input.CityId);
            var pagedRequests = allRequests.Skip(input.SkipCount).Take(input.MaxResultCount).OrderByDescending(x => x.Id).ToList();
            return Task.FromResult(new PagedResultDto<RequestDto>(allRequests.Count(), ObjectMapper.Map<List<RequestDto>>(pagedRequests)));
        }

        public override async Task<RequestDto> CreateAsync(CreateRequestDto input)
        {
            CheckCreatePermission();
            Request requestObj = new Request
            {
                Name = input.Name,
                Description = input.Description,
                CNIC = input.CNIC,
                Address = input.Address,
                Lat = input.Lat,
                Lng = input.Lng,
                CityId = input.CityId,
                StatusId = (byte)RequestStatusEnum.PENDING
            };

            var requestId = await _requestRepository.InsertAndGetIdAsync(requestObj);
            var request = _requestRepository.GetAllIncluding(x => x.Status).Where(x => x.Id == requestId).Include(x => x.City).FirstOrDefault();
            return ObjectMapper.Map<RequestDto>(request);
        }

        public async Task<RequestDetailsDto> GetRequestDetails(int id)
        {
            RequestDetailsDto detailsDto = new RequestDetailsDto
            {
                RequestId = id,
                Images = (await _requestImages.GetAllListAsync(x => x.RequestId == id))
                                    .Select(x => x.Image).ToList(),
                Description = (await _requestRepository.GetAsync(id)).Description
            };
            return detailsDto;
        }

        public async Task<bool> AddRequestImagesForRequest(int requestId, List<string> imagesNames)
        {
            for(int i = 0; i < imagesNames.Count; i++)
            {
                RequestImages requestImage = new RequestImages
                {
                    Image = imagesNames[i],
                    RequestId = requestId
                };
                await _requestImages.InsertAsync(requestImage);
            }
            return true;
        }

        public async Task<bool> ApproveRequest(int requestId)
        {
            CheckUpdatePermission();
            var request = await _requestRepository.GetAsync(requestId);
            request.StatusId = (int)RequestStatusEnum.APPROVED;
            await _requestRepository.UpdateAsync(request);
            return true;
        }

        public async Task<bool> DeclineRequest(int requestId)
        {
            CheckUpdatePermission();
            var request = await _requestRepository.GetAsync(requestId);
            request.StatusId = (int)RequestStatusEnum.DECLINED;
            await _requestRepository.UpdateAsync(request);
            return true;
        }

        protected override IQueryable<Request> CreateFilteredQuery(PagedRequestResultRequestDto input)
        {
            return Repository.GetAllIncluding()
                .WhereIf(!input.Keyword.IsNullOrWhiteSpace(), x => x.CNIC.Contains(input.Keyword) || x.Name.Contains(input.Keyword) || x.Address.Contains(input.Keyword));
        }

        protected override IQueryable<Request> ApplySorting(IQueryable<Request> query, PagedRequestResultRequestDto input)
        {
            return query.OrderByDescending(order => order.CreationTime);
        }
    }
}
