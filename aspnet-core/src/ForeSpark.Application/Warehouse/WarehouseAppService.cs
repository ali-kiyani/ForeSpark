using Abp.Application.Services;
using Abp.Domain.Repositories;
using ForeSpark.Warehouse.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ForeSpark.Warehouse
{
    public class WarehouseAppService : AsyncCrudAppService<Warehouse, WarehouseDto, int, PagedWarehouseResultRequestDto, CreateWarehouseDto, WarehouseDto>, IWarehouseAppService
    {
        private readonly IRepository<Warehouse> _warehouseRepository;
        public WarehouseAppService(IRepository<Warehouse> warehouseRepository) :base (warehouseRepository)
        {
            _warehouseRepository = warehouseRepository;
        }

        public async Task<List<WarehouseDto>> getAllWarehouses()
        {
            CheckGetAllPermission();
            var warehouses = await _warehouseRepository.GetAllListAsync();

            return ObjectMapper.Map<List<WarehouseDto>>(warehouses);
        }
    }
}
