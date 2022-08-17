namespace DigitalAppraisal.Entities
{
    public class GeneralCodeDetail
    {
        public long Id { get; set; }
        public string Group { get; set; }
        public string Code { get; set; }
        public string Description { get; set; }
        public int Order { get; set; }
        public bool Active { get; set; }
        public string Language { get; set; }
    }
}