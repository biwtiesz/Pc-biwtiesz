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

        [Route("{id}")]
        public ActionResult<Parameter> Get(long id)
        {
            var parameter = _unitOfWork.Parameter.Find(p => p.Id == id);
            if (parameter != null)
            {
                return Ok(parameter);
            }
            return NotFound();
        }

        [Route("search")]
        public ActionResult<IEnumerable<Parameter>> Search(string group)
        {
            var parameters = _unitOfWork.Parameter.FindAll(p => p.Group == group);

            return Ok(parameters);
        }

        [HttpPost]
        [Route("create")]
        public ActionResult Create(Parameter parameter)
        {
            _unitOfWork.Parameter.Create(parameter);
            _unitOfWork.Save();

            return Ok();
        }

        [HttpPatch]
        [Route("{id}")]
        public ActionResult Edit(Parameter parameter)
        {
            var dbParameter = _unitOfWork.Parameter.Find(p => p.Id == parameter.Id);
            if (dbParameter != null)
            {
                dbParameter.Group = parameter.Group;
                dbParameter.Code = parameter.Code;
                dbParameter.Description = parameter.Description;
                dbParameter.Order = parameter.Order;
                dbParameter.Language = parameter.Language;

                _unitOfWork.Parameter.Edit(dbParameter);
                _unitOfWork.Save();

                return Ok(dbParameter);
            }

            return NotFound();
        }

        [HttpDelete]
        [Route("{id}")]
        public ActionResult Delete(long id)
        {
            var parameter = _unitOfWork.Parameter.Find(p => p.Id == id);
            if (parameter != null)
            {
                _unitOfWork.Parameter.Delete(parameter);
                _unitOfWork.Save();

                return Ok();
            }

            return NotFound();
        }
    }
}