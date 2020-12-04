using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ForeSpark.ProcessedMetadata
{
    public class ProcessedMetadata : Entity<int>
    {
        public Processed.Processed Processed { get; set; }

        [ForeignKey("Processed")]
        public int ProcessedId { get; set; }
        public DateTime InVisionTime { get; set; }
        public string FileName { get; set; }
    }
}
