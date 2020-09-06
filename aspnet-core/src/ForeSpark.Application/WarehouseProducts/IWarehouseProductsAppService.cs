using Abp.Application.Services;
using ForeSpark.WarehouseProducts.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace ForeSpark.WarehouseProducts
{
    public interface IWarehouseProductsAppService : IAsyncCrudAppService<WarehouseProductsDto, int, PagedWarehouseProductsResultRequestDto, CreateWarehouseProductsDto, WarehouseProductsDto>
    {
    }
}
