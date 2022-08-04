using System.ComponentModel.DataAnnotations;

namespace DigitalAppraisal.DTOs
{
    public class SignUpDTO
    {
        [Required]
        public string username { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string password { get; set; }
    }
}