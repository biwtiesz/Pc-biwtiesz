using System.ComponentModel.DataAnnotations;

namespace DigitalAppraisal.DTOs
{
    public class SignInDTO
    {
        [Required]
        public string username { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string password { get; set; }
    }
}