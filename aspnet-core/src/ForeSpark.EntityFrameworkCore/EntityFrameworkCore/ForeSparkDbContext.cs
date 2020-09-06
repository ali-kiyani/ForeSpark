using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using ForeSpark.Authorization.Roles;
using ForeSpark.Authorization.Users;
using ForeSpark.MultiTenancy;
using ForeSpark.Product;

namespace ForeSpark.EntityFrameworkCore
{
    public class ForeSparkDbContext : AbpZeroDbContext<Tenant, Role, User, ForeSparkDbContext>
    {
        /* Define a DbSet for each entity of the application */
        public DbSet<Product.Product> Products { get; set; }
        public DbSet<Warehouse.Warehouse> Warehouses { get; set; }
        public DbSet<WarehouseProducts.WarehouseProducts> WarehouseProducts { get; set; }
        public DbSet<ProductImages> ProductImages { get; set; }
        public DbSet<Orders.Orders> Orders { get; set; }
        public DbSet<Orders.OrderedProducts> OrderedProducts { get; set; }
        public ForeSparkDbContext(DbContextOptions<ForeSparkDbContext> options)
            : base(options)
        {
        }
    }
}
