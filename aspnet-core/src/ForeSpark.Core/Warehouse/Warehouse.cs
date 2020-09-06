using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using ForeSpark.Authorization.Users;
using System;
using System.Collections.Generic;
using System.Text;

namespace ForeSpark.Warehouse
{
    public class Warehouse : Entity<int>, IFullAudited<User>
    {
        public string Name { get; set; }
        public string Address { get; set; }
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
    }
}
