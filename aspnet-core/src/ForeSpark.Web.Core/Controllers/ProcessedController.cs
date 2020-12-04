using ForeSpark.Processed;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;

namespace ForeSpark.Controllers
{
    [Route("api/[controller]/[action]")]
    public class ProcessedController : ForeSparkControllerBase
    {
        private readonly IProcessedAppService _processedAppService;

        public ProcessedController(IProcessedAppService processedAppService)
        {
            _processedAppService = processedAppService;
        }
    }
}
