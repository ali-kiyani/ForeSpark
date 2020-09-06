using System;
using System.Collections.Generic;
using System.Text;

namespace ForeSpark.Orders.Dto
{
    public class CreateOrderDto
    {
        public string PaymentMethod { get; set; }
        public long CustomerId { get; set; }
        public List<CreateOrderedProductDto> OrderedProductsDto { get; set; }
    }
}
