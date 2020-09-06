using Abp.Application.Services;
using Abp.Domain.Repositories;
using ForeSpark.WarehouseProducts.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace ForeSpark.WarehouseProducts
{
    public class WarehouseProductsAppService : AsyncCrudAppService<WarehouseProducts, WarehouseProductsDto, int, PagedWarehouseProductsResultRequestDto, CreateWarehouseProductsDto, WarehouseProductsDto>, IWarehouseProductsAppService
    {
        private readonly IRepository<WarehouseProducts> _warehouseProductsRepository;
        public WarehouseProductsAppService(IRepository<WarehouseProducts> warehouseProductsRepository) : base(warehouseProductsRepository)
        {
            _warehouseProductsRepository = warehouseProductsRepository;
        }
    }
}
