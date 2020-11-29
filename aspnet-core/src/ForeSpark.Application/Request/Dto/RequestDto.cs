﻿using Abp.Application.Services.Dto;
using Abp.AutoMapper;

namespace ForeSpark.Request.Dto
{
    [AutoMap(typeof(Request))]
    public class RequestDto : EntityDto<int>
    {
        public string CNIC { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Description { get; set; }
        public double? Lat { get; set; }
        public double? Lng { get; set; }
        public CitiesDto City { get; set; }
        public RequestStatusDto Status { get; set; }
    }
}
