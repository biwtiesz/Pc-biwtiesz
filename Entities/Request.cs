using System.ComponentModel.DataAnnotations;

namespace DigitalAppraisal.Entities
{
    public class AppraisalRequest
    {
        [Key]
        public long ReqId { get; set; }
        public string Source { get; set; }
        public long KeyId { get; set; }
        public string Status { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedOn { get; set; } = DateTime.Now;
        public string UpdatedBy { get; set; }
        public DateTime UpdatedOn { get; set; } = DateTime.Now;
    }
}