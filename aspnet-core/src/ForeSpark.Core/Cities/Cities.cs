using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace ForeSpark.Cities
{
    public class Cities : Entity<int>
    {
        public string Name { get; set; }
    }
}
