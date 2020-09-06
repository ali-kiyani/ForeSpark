using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using ForeSpark.Authorization.Users;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ForeSpark.Orders
{
    public class Orders : Entity<int>, ICreationAudited, IModificationAudited
    {
        public long TotalPrice { get; set; }
        public long DiscountedTotalPrice { get; set; }
        public string PaymentMethod { get; set; }
        public User User { get; set; }
        [ForeignKey("User")]
        public long CustomerId { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime CreationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public ICollection<OrderedProducts> OrderedProducts { get; set; }
    }
}
