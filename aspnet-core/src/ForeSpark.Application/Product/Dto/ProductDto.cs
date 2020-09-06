using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace ForeSpark.Product.Dto
{
    [AutoMap(typeof(Product))]
    public class ProductDto : EntityDto<int>
    {
        public string SKU { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public double DiscountedPrice { get; set; }
        public double? Weight { get; set; }
        public string Description { get; set; }
    }
}
