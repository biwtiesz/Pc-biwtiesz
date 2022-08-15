using DigitalAppraisal.Data.Interfaces;
using Microsoft.AspNetCore.Mvc;
using DigitalAppraisal.Entities;
using DigitalAppraisal.DTOs;
using System.Linq;



namespace DigitalAppraisal.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GeneralCodeController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;

        public GeneralCodeController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public ActionResult<IEnumerable<GeneralCode>> Get()
        {
            var generalCode = _unitOfWork.GeneralCode.FindAll();

            return Ok(generalCode);
        }
        [Route("{id}")]
        public ActionResult<GeneralCode> Get(long id)
        {
            var generalCode = _unitOfWork.GeneralCode.Find(p => p.Id == id);
            if (generalCode != null)
            {
                return Ok(generalCode);
            }
            return NotFound();
        }
        [Route("search")]
        public ActionResult<IEnumerable<GeneralCodeDTO>> Search(long id)
        {
            GeneralCodeDTO generalCodeDTO = new();
            generalCodeDTO.GeneralCodeDetail = new List<GeneralCodeDetail>();

            var generalCode = _unitOfWork.GeneralCode.Find(p => p.Id == id);
            var generalCodeDetail = _unitOfWork.GeneralCodeDetail.FindAll(p => p.Group == generalCode.Group).ToList();

            generalCodeDTO.Id = generalCode.Id;
            generalCodeDTO.Group = generalCode.Group;
            generalCodeDTO.Description = generalCode.Description;
            generalCodeDTO.LocalDescription = generalCode.Description;

            generalCodeDTO.GeneralCodeDetail = generalCodeDetail;

            return Ok(generalCodeDTO);
        }


        [HttpPost]
        [Route("create")]
        public ActionResult Create(GeneralCode GeneralCode)
        {
            _unitOfWork.GeneralCode.Create(GeneralCode);
            _unitOfWork.Save();

            return Ok();
        }

        [HttpPatch]
        [Route("{id}")]
        public ActionResult Edit(GeneralCode GeneralCode)
        {
            var dbGeneralCode = _unitOfWork.GeneralCode.Find(p => p.Id == GeneralCode.Id);
            if (dbGeneralCode != null)
            {
                dbGeneralCode.Group = GeneralCode.Group;
                dbGeneralCode.Description = GeneralCode.Description;
                dbGeneralCode.LocalDescription = GeneralCode.LocalDescription;


                _unitOfWork.GeneralCode.Edit(dbGeneralCode);
                _unitOfWork.Save();

                return Ok(dbGeneralCode);
            }

            return NotFound();
        }

        [HttpDelete]
        [Route("{id}")]
        public ActionResult Delete(long id)
        {
            var generalCode = _unitOfWork.GeneralCode.Find(p => p.Id == id);
            if (generalCode != null)
            {
                _unitOfWork.GeneralCode.Delete(generalCode);
                _unitOfWork.Save();

                return Ok();
            }

            return NotFound();
        }

    }
}