using Abp.UI;
using ForeSpark.Configuration;
using ForeSpark.Product;
using ForeSpark.Product.Dto;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using NUglify.Helpers;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace ForeSpark.Controllers
{
    [Route("api/[controller]/[action]")]
    public class ProductController : ForeSparkControllerBase
    {
        private readonly IProductAppService _productAppService;
        private readonly string ProductImagePrefix = "Product_";
        private readonly IWebHostEnvironment _hostEnvironment;
        private readonly IConfigurationRoot _appConfiguration;
        private string ImagesFolderPath = null;

        public ProductController(IProductAppService productAppService, IWebHostEnvironment hostEnvironment)
        {
            _productAppService = productAppService;
            _hostEnvironment = hostEnvironment;
            _appConfiguration = hostEnvironment.GetAppConfiguration();
            ImagesFolderPath = Path.Combine(_appConfiguration["Paths:PhysicalPath"], _appConfiguration["Paths:ProductsImagesFolder"]);
            Directory.CreateDirectory(ImagesFolderPath);
        }

        [HttpPost]
        public async Task<ProductDto> CreateNewProductAsync()
        {
            var model = HttpContext.Request.Form["productForm"];
            var createProductDto = JsonConvert.DeserializeObject<CreateProductDto>(model);
            ProductDto product = await _productAppService.CreateAsync(createProductDto);
            var productImages = HttpContext.Request.Form.Files;
            string path = Path.Combine(ImagesFolderPath, product.Id.ToString());
            Directory.CreateDirectory(path); ;
            int i = 1;
            List<string> imagesNameList = new List<string>();
            productImages.ForEach(async (image) =>
            {
                if (image.Length > 0)
                {
                    var nameSplits = image.FileName.Split(".");
                    var type = nameSplits[nameSplits.Length - 1];
                    var imageName = ProductImagePrefix + product.Id + "_" + i + "." + type;
                    var filePath = Path.Combine(path, imageName);
                    i++;
                    imagesNameList.Add(imageName);
                    using (var fileStream = new FileStream(filePath, FileMode.Create))
                    {
                        await image.CopyToAsync(fileStream);
                    }
                }
            });
            await _productAppService.AddProductImagesForProduct(product.Id, imagesNameList);
            return product;
        }

        [HttpGet, Route("{productId}/{productImageName}")]
        public IActionResult GetImage(int productId, string productImageName)
        {
            var path = Path.Combine(ImagesFolderPath, productId.ToString());
            var imageFile = Directory.EnumerateFiles(path, $"{productImageName}.*", SearchOption.TopDirectoryOnly).FirstOrDefault();
            if (imageFile == null)
                throw new UserFriendlyException(L("ImageNotFound"));

            var image = System.IO.File.OpenRead(imageFile);
            new FileExtensionContentTypeProvider().TryGetContentType(imageFile, out var contentType);
            return File(image, contentType);
        }
    }
}
