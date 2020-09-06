using Abp.AutoMapper;
using ForeSpark.WarehouseProducts.Dto;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ForeSpark.Product.Dto
{
    public class CreateProductDto
    {
        [Required]
        public string SKU { get; set; }
        [Required]
        public string Name { get; set; }
        public double Price { get; set; }
        public double DiscountedPrice { get; set; }
        public double? Weight { get; set; }
        public string Description { get; set; }
        public List<WarehouseProductsDto> WarehouseProducts { get; set; }
    }
}
