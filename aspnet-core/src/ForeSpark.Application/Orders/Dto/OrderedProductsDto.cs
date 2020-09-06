using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using ForeSpark.Product.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace ForeSpark.Orders.Dto
{
    [AutoMap(typeof(OrderedProducts))]
    public class OrderedProductsDto : EntityDto<int>
    {
        public ProductDto Product { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public long PerItemPrice { get; set; }
    }
}
