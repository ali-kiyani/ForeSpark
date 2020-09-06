using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace ForeSpark.WarehouseProducts.Dto
{
    [AutoMap(typeof(WarehouseProducts))]
    public class CreateWarehouseProductsDto
    {
        public int WarehouseId { get; set; }
        public int ProductId { get; set; }
        public int TotalStock { get; set; }
        public int SoldStock { get; set; }
    }
}
