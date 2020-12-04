using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using ForeSpark.Authorization.Users;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ForeSpark.Processed
{
    public class Processed : Entity<int>, IFullAudited<User>
    {
        public Request.Request Request { get; set; }

        [ForeignKey("Request")]
        public int RequestId { get; set; }
        public Installations.Installations Installations { get; set; }

        [ForeignKey("Installations")]
        public int InstallationId { get; set; }
        public ICollection<ProcessedMetadata.ProcessedMetadata> ProcessedMetadata { get; set; }
        public User CreatorUser { get; set; }
        public User LastModifierUser { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime CreationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public User DeleterUser { get; set; }
        public long? DeleterUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public bool IsDeleted { get; set; }
    }
}
