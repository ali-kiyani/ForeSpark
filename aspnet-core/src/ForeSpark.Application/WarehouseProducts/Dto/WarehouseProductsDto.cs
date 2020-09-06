using Abp.Application.Services.Dto;
using Abp.AutoMapper;

namespace ForeSpark.WarehouseProducts.Dto
{
    [AutoMap(typeof(WarehouseProducts))]
    public class WarehouseProductsDto : EntityDto<int>
    {
        public int WarehouseId { get; set; }
        public int ProductId { get; set; }
        public int TotalStock { get; set; }
        public int SoldStock { get; set; }
        public Warehouse.Dto.WarehouseDto Warehouse { get; set; }
    }
}
