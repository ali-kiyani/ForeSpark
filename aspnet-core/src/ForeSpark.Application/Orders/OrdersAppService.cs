using Abp.Application.Services;
using Abp.Domain.Repositories;
using Abp.UI;
using ForeSpark.Orders.Dto;
using ForeSpark.WarehouseProducts.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace ForeSpark.Orders
{
    public class OrdersAppService : AsyncCrudAppService<Orders, OrderDto, int, PagedOrderResultRequestDto, CreateOrderDto, OrderDto>, IOrdersAppService
    {
        private readonly IRepository<Orders> _ordersRepository;
        private readonly IRepository<Product.Product> _productRepository;
        private readonly IRepository<OrderedProducts> _orderedProductsrepository;
        private readonly IRepository<WarehouseProducts.WarehouseProducts> _warehouseProductsRepository;

        public OrdersAppService(IRepository<Orders> ordersRepository,
            IRepository<Product.Product> productRepository,
            IRepository<OrderedProducts> orderedProductsrepository,
            IRepository<WarehouseProducts.WarehouseProducts> warehouseProductsRepository) : base (ordersRepository)
        {
            _ordersRepository = ordersRepository;
            _productRepository = productRepository;
            _orderedProductsrepository = orderedProductsrepository;
            _warehouseProductsRepository = warehouseProductsRepository;
        }

        public override async Task<OrderDto> CreateAsync(CreateOrderDto input)
        {
            CheckCreatePermission();
            var productIds = input.OrderedProductsDto.Select(x => x.ProductId).ToList();
            if (!(await ValidateProductsQuantity(input.OrderedProductsDto, productIds)))
                throw new UserFriendlyException(L("QuantityCannotBeGreaterThanStock"));

            var products = await _productRepository.GetAllListAsync(x => productIds.Contains(x.Id));
            long totalPrice = (long)products.Sum(x => x.Price);
            long discountedPrice = (long)products.Sum(x => x.DiscountedPrice);

            Orders newOrder = new Orders()
            {
                CustomerId = input.CustomerId,
                DiscountedTotalPrice = discountedPrice,
                PaymentMethod = input.PaymentMethod,
                TotalPrice = totalPrice  
            };
            var order = await _ordersRepository.InsertAsync(newOrder);
            input.OrderedProductsDto.ForEach(async orderedProduct =>
            {
                OrderedProducts newOrderedProduct = new OrderedProducts()
                {
                    OrderId = order.Id,
                    PerItemPrice = (long)products.Where(p => p.Id == orderedProduct.ProductId)
                                        .Select(p => p.DiscountedPrice).FirstOrDefault(),
                    ProductId = orderedProduct.ProductId,
                    Quantity = orderedProduct.Quantity
                };
                await _orderedProductsrepository.InsertAsync(newOrderedProduct);
            });

            return ObjectMapper.Map<OrderDto>(order);
        }

        private async Task<bool> ValidateProductsQuantity(List<CreateOrderedProductDto> orderedProductDtos, List<int> productIds)
        {
            var warehouseProducts = await _warehouseProductsRepository.GetAllListAsync(x => productIds.Contains(x.Id));
            var productQuantities = warehouseProducts.GroupBy(g => g.ProductId)
                .Select(x => new WarehouseProductsDto
                {
                    TotalStock = x.Sum(s => s.TotalStock - s.SoldStock),
                    ProductId = x.Key
                }).ToList();
            for (int i = 0; i < orderedProductDtos.Count; i++)
            {
                if (orderedProductDtos[i].Quantity > productQuantities.Where(x => x.ProductId == orderedProductDtos[i].ProductId).Select(s => s.TotalStock).FirstOrDefault())
                {
                    return false;
                }
            }

            return true;
        }
    }
}
