using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace ForeSpark.Warehouse.Dto
{
    public class PagedWarehouseResultRequestDto : PagedResultRequestDto
    {
        public string Keyword { get; set; }
    }
}
