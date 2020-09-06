using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using ForeSpark.Users.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace ForeSpark.Orders.Dto
{
    [AutoMap(typeof(Orders))]
    public class OrderDto : EntityDto<int>
    {
        public long TotalPrice { get; set; }
        public long DiscountedTotalPrice { get; set; }
        public string PaymentMethod { get; set; }
        public UserDto User { get; set; }
        public long CustomerId { get; set; }
        public DateTime CreationTime { get; set; }
    }
}
