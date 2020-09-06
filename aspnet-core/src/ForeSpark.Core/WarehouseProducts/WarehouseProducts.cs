using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ForeSpark.WarehouseProducts
{
    public class WarehouseProducts : Entity<int>
    {
        public Warehouse.Warehouse Warehouse { get; set; }
        [ForeignKey("Warehouse")]
        public int WarehouseId { get; set; }
        public Product.Product Product { get; set; }
        [ForeignKey("Product")]
        public int ProductId { get; set; }
        public int TotalStock { get; set; }
        public int SoldStock { get; set; }
    }
}
