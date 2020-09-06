using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace ForeSpark.Warehouse.Dto
{
    [AutoMap(typeof(Warehouse))]
    public class WarehouseDto : EntityDto<int>
    {
        public string Name { get; set; }
        public string Address { get; set; }
    }
}
