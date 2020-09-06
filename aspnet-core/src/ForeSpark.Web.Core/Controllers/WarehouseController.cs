using ForeSpark.Warehouse;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;

namespace ForeSpark.Controllers
{
    [Route("api/[controller]/[action]")]
    public class WarehouseController : ForeSparkControllerBase
    {
        private readonly IWarehouseAppService _warehouseAppService;
        public WarehouseController(IWarehouseAppService warehouseAppService)
        {
            _warehouseAppService = warehouseAppService;
        }
    }
}
