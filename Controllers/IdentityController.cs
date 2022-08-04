using DigitalAppraisal.DTOs;
using DigitalAppraisal.Entities;
using DigitalAppraisal.Utilities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace DigitalAppraisal.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class IdentityController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly UserManager<ApplicationUser> _userManager;

        public IdentityController(IConfiguration configuration, UserManager<ApplicationUser> userManager)
        {
            _configuration = configuration;
            _userManager = userManager;
        }
        [HttpPost]
        [Route("signup")]
        public async Task<ActionResult> SignUp(SignUpDTO model)
        {
            var user = await _userManager.FindByNameAsync(model.username);
            if (user == null)
            {
                user = new ApplicationUser
                {
                    UserName = model.username
                };

                var result = await _userManager.CreateAsync(user, model.password);
                if (result.Succeeded)
                {
                    var token = GenerateToken.GenerateClientAccessToken(_configuration, user);
                    return Ok(new { token });
                }
            }
            return Unauthorized();
        }

        [HttpPost]
        [Route("signin")]
        public async Task<ActionResult> SignIn(SignInDTO model)
        {
            var user = await _userManager.FindByNameAsync(model.username);
            if (user != null)
            {
                if (await _userManager.CheckPasswordAsync(user, model.password))
                {
                    var token = GenerateToken.GenerateClientAccessToken(_configuration, user);
                    return Ok(new { token });
                }
            }
            return Unauthorized();
        }
    }
}