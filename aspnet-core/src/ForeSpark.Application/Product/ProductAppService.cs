using Abp.Application.Services;
using Abp.AutoMapper;
using Abp.Domain.Repositories;
using ForeSpark.Product.Dto;
using ForeSpark.WarehouseProducts;
using ForeSpark.WarehouseProducts.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace ForeSpark.Product
{
    public class ProductAppService : AsyncCrudAppService<Product, ProductDto, int, PagedProductResultRequestDto, CreateProductDto, ProductDto>, IProductAppService
    {
        private readonly IRepository<Product> _productRepository;
        private readonly IRepository<ProductImages> _productImages;
        private readonly IRepository<WarehouseProducts.WarehouseProducts> _warehouseProductsRepository;
        public ProductAppService(IRepository<Product> productRepository, 
            IRepository<WarehouseProducts.WarehouseProducts> warehouseProductsRepository,
            IRepository<ProductImages> productImages) : base(productRepository)
        {
            _productRepository = productRepository;
            _productImages = productImages;
            _warehouseProductsRepository = warehouseProductsRepository;
        }

        public override async Task<ProductDto> CreateAsync(CreateProductDto input)
        {
            CheckCreatePermission();
            Product productObj = new Product
            {
                Name = input.Name,
                Description = input.Description,
                Price = input.Price,
                DiscountedPrice = input.DiscountedPrice,
                SKU = input.SKU
            };

            var productId = await _productRepository.InsertAndGetIdAsync(productObj);
            input.WarehouseProducts.ForEach(async warehouseProduct =>
            {
                WarehouseProducts.WarehouseProducts newwWarehouseProduct = new WarehouseProducts.WarehouseProducts
                {
                    ProductId = productId,
                    TotalStock = warehouseProduct.TotalStock,
                    SoldStock = 0,
                    WarehouseId = warehouseProduct.WarehouseId
                };
                await _warehouseProductsRepository.InsertAsync(newwWarehouseProduct);

            });
            return ObjectMapper.Map<ProductDto>(await _productRepository.GetAsync(productId));
        }

        public async Task<ProductDetailsDto> getProductDetails(int id)
        {
            ProductDetailsDto detailsDto = new ProductDetailsDto
            {
                ProductId = id,
                Images = (await _productImages.GetAllListAsync(x => x.ProductId == id))
                                    .Select(x => x.Image).ToList(),
                WarehouseProductsDetails = ObjectMapper.Map<List<WarehouseProductsDto>>(_warehouseProductsRepository.GetAllIncluding(x => x.Warehouse).Where(x => x.ProductId == id).ToList())
            };
            return detailsDto;
        }

        public async Task<bool> AddProductImagesForProduct(int productId, List<string> imagesNames)
        {
            for(int i = 0; i < imagesNames.Count; i++)
            {
                ProductImages productImage = new ProductImages
                {
                    Image = imagesNames[i],
                    ProductId = productId
                };
                await _productImages.InsertAsync(productImage);
            }
            return true;
        }
    }
}
