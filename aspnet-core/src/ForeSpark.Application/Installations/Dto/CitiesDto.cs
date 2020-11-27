using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace ForeSpark.Installations.Dto
{
    [AutoMap(typeof(Cities.Cities))]
    public class CitiesDto : EntityDto<int>
    {
        public string Name { get; set; }
    }
}
