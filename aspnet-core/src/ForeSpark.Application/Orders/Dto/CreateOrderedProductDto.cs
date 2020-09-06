using System;
using System.Collections.Generic;
using System.Text;

namespace ForeSpark.Orders.Dto
{
    public class CreateOrderedProductDto
    {
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public string SKU { get; set; }
    }
}
