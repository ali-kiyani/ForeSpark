using ForeSpark.WarehouseProducts.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace ForeSpark.Product.Dto
{
    public class ProductDetailsDto
    {
        public int ProductId { get; set; }
        public List<WarehouseProductsDto> WarehouseProductsDetails { get; set; }
        public List<string> Images { get; set; }
    }
}
