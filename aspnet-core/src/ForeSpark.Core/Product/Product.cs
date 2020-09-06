using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using ForeSpark.Authorization.Users;
using System;
using System.Collections.Generic;
using System.Text;

namespace ForeSpark.Product
{
    public class Product : Entity<int>, IFullAudited<User>
    {
        public string SKU { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public double DiscountedPrice { get; set; }
        public double? Weight { get; set; }
        public string Description { get; set; }
        public User CreatorUser { get; set; }
        public User LastModifierUser { get; set; }
        public DateTime CreationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public User DeleterUser { get; set; }
        public long? DeleterUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public bool IsDeleted { get; set; }
        public long? CreatorUserId { get; set; }
        public ICollection<ProductImages> ProductImages { get; set; }
    }
}
