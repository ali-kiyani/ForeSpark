using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace ForeSpark.Orders.Dto
{
    public class PagedOrderResultRequestDto : PagedResultRequestDto
    {
        public string Keyword { get; set; }
    }
}
