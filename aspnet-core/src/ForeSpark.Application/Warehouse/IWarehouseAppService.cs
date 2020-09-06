using Abp.Application.Services;
using ForeSpark.Warehouse.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ForeSpark.Warehouse
{
    public interface IWarehouseAppService : IAsyncCrudAppService<WarehouseDto, int, PagedWarehouseResultRequestDto, CreateWarehouseDto, WarehouseDto>
    {
        Task<List<WarehouseDto>> getAllWarehouses();
    }
}
