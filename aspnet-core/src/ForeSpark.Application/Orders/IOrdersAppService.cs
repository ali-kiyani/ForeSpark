using Abp.Application.Services;
using ForeSpark.Orders.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace ForeSpark.Orders
{
    public interface IOrdersAppService : IAsyncCrudAppService<OrderDto, int, PagedOrderResultRequestDto, CreateOrderDto, OrderDto>
    {
    }
}
