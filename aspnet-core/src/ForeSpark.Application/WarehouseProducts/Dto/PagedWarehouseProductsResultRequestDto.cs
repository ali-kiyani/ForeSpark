using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace ForeSpark.WarehouseProducts.Dto
{
    public class PagedWarehouseProductsResultRequestDto : PagedResultRequestDto
    {
        public string Keyword { get; set; }
    }
}
