using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ForeSpark.Orders
{
    public class OrderedProducts: Entity<int>
    {
        public Product.Product Product { get; set; }
        [ForeignKey("Product")]
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public long PerItemPrice { get; set; }
        public Orders Orders { get; set; }
        [ForeignKey("Orders")]
        public int OrderId { get; set; }
    }
}
