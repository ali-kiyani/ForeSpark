using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ForeSpark.Warehouse.Dto
{
    [AutoMap(typeof(Warehouse))]
    public class CreateWarehouseDto
    {
        [Required]
        public string Name { get; set; }
        public string Address { get; set; }
    }
}
