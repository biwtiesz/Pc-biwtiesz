namespace DigitalAppraisal.Entities
{
    public class AppraisalRequestDetail
    {
        public long DetailId { get; set; }
        public long ReqId { get; set; }
        public string ApplNo { get; set; }
        public string AANo { get; set; }
        public string BranchCode { get; set; }
        public string BranchDescription { get; set; }
        public string BranchOfficer { get; set; }
        public string BranchContactNo { get; set; }
        public string DECBranchCode { get; set; }
        public string DECBranchDescription { get; set; }
        public string DECOfficer { get; set; }
        public string DECContactNo { get; set; }
        public string Province { get; set; }
        public decimal Fee { get; set; }
    }
}