using Abp.Application.Services;
using Abp.Application.Services.Dto;
using ForeSpark.Product.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ForeSpark.Product
{
    public interface IProductAppService : IAsyncCrudAppService<ProductDto, int, PagedProductResultRequestDto, CreateProductDto, ProductDto>
    {
        Task<ProductDetailsDto> getProductDetails(int id);
        Task<bool> AddProductImagesForProduct(int productId, List<string> imagesNames);
    }
}
