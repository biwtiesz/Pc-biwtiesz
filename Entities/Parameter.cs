namespace DigitalAppraisal.Entities
{
    public class Parameter
    {
        public int Id { get; set; }
        public string Group { get; set; }
        public string Code { get; set; }
        public string Description { get; set; }
        public string Language { get; set; }
        public bool Active { get; set; }
    }
}