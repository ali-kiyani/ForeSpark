using ForeSpark.WarehouseProducts;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;

namespace ForeSpark.Controllers
{
    [Route("api/[controller]/[action]")]
    public class WarehouseProductsController : ForeSparkControllerBase
    {
        private readonly IWarehouseProductsAppService _warehouseProductsAppService;

        public WarehouseProductsController(IWarehouseProductsAppService warehouseProductsAppService)
        {
            _warehouseProductsAppService = warehouseProductsAppService;
        }

    }
}
