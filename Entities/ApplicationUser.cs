using Microsoft.AspNetCore.Identity;

namespace DigitalAppraisal.Entities
{
    public class ApplicationUser : IdentityUser
    {
        public string RefreshToken { get; set; }
    }
}