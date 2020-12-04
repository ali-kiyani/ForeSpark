using System;
using System.Collections.Generic;
using System.Text;

namespace ForeSpark.Processed.Dto
{
    public class ProcessedMetadataDto
    {
        public int ProcessedId { get; set; }
        public DateTime InVisionTime { get; set; }
        public string FileName { get; set; }
    }
}
