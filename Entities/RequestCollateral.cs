namespace DigitalAppraisal.Entities
{
    public class AppraisalRequestCollateral
    {
        public long CollatId { get; set; }
        public long ReqId { get; set; }
        public string HostCollatId { get; set; }
        public string Category { get; set; }
        public string SubCategory { get; set; }
        public string Code { get; set; }
        public string TitleType { get; set; }
        public string TitleDeedNumber { get; set; }
        public string ParcelNumber { get; set; }
        public string Province { get; set; }
        public string District { get; set; }
        public string SubDistrict { get; set; }
    }
}