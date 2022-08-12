using DigitalAppraisal.Data.Interfaces;
using DigitalAppraisal.Entities;
using Microsoft.AspNetCore.Mvc;

namespace DigitalAppraisal.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ParameterController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public ParameterController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public ActionResult<IEnumerable<Parameter>> Get()
        {
            var parameters = _unitOfWork.Parameter.FindAll();

            return Ok(parameters);
        }

        public ActionResult Create(Parameter parameter)
        {
            _unitOfWork.Parameter.Create(parameter);
            _unitOfWork.Save();

            return Ok();
        }
    }
}