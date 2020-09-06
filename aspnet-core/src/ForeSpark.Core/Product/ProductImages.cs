using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ForeSpark.Product
{
    public class ProductImages : Entity<int>
    {
        public Product Product { get; set; }
        [ForeignKey("Product")]
        public int ProductId { get; set; }
        public string Image { get; set; }
    }
}
