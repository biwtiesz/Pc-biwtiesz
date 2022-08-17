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

        [Route("{group}")]
        public ActionResult<GeneralCode> Get(string group)
        {
            var generalCode = _unitOfWork.GeneralCode.Find(p => p.Group == group);
            if (generalCode != null)
            {
                return Ok(generalCode);
            }
            return NotFound();
        }
        [Route("getGeneralCode")]
        public ActionResult<IEnumerable<GeneralCodeDTO>> getGeneralCode(string group)
        {
            GeneralCodeDTO generalCodeDTO = new();
            generalCodeDTO.GeneralCodeDetail = new List<GeneralCodeDetail>();

            var generalCode = _unitOfWork.GeneralCode.Find(p => p.Group == group);
            var generalCodeDetail = _unitOfWork.GeneralCodeDetail.FindAll(p => p.Group == generalCode.Group).ToList();

            generalCodeDTO.Id = generalCode.Id;
            generalCodeDTO.Group = generalCode.Group;
            generalCodeDTO.Description = generalCode.Description;
            generalCodeDTO.LocalDescription = generalCode.LocalDescription;

            generalCodeDTO.GeneralCodeDetail = generalCodeDetail;

            return Ok(generalCodeDTO);
        }

        [Route("getGeneralCodeDetail")]
        public ActionResult<IEnumerable<GeneralCodeDetail>> getGeneralCodeDetail(long id)
        {
            var generalCodeDetail = _unitOfWork.GeneralCodeDetail.Find(p => p.Id == id);

            return Ok(generalCodeDetail);
        }


        [HttpPost]
        [Route("create/code")]
        public ActionResult Create(GeneralCode GeneralCode)
        {
            _unitOfWork.GeneralCode.Create(GeneralCode);
            _unitOfWork.Save();

            return Ok();
        }

        [HttpPost]
        [Route("create/detail")]
        public ActionResult CreateDetail(GeneralCodeDetail GeneralCodeDetail)
        {
            _unitOfWork.GeneralCodeDetail.Create(GeneralCodeDetail);
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

        [HttpPatch]
        [Route("editdetail/{id}")]
        public ActionResult EditDetail(GeneralCodeDetail GeneralCodeDetail)
        {
            var dbGeneralCodeDetail = _unitOfWork.GeneralCodeDetail.Find(p => p.Id == GeneralCodeDetail.Id);
            if (dbGeneralCodeDetail != null)
            {
                dbGeneralCodeDetail.Group = GeneralCodeDetail.Group;
                dbGeneralCodeDetail.Code = GeneralCodeDetail.Code;
                dbGeneralCodeDetail.Description = GeneralCodeDetail.Description;
                dbGeneralCodeDetail.Order = GeneralCodeDetail.Order;
                dbGeneralCodeDetail.Active = GeneralCodeDetail.Active;


                _unitOfWork.GeneralCodeDetail.Edit(dbGeneralCodeDetail);
                _unitOfWork.Save();

                return Ok(dbGeneralCodeDetail);
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
                var generalCodeDetail = _unitOfWork.GeneralCodeDetail.Find(p => p.Group == generalCode.Group);
                if (generalCodeDetail != null)
                {
                    _unitOfWork.GeneralCodeDetail.Delete(generalCodeDetail);
                }
                _unitOfWork.GeneralCode.Delete(generalCode);
                _unitOfWork.Save();
                return Ok();
            }

            return NotFound();
        }

        [HttpDelete]
        [Route("deletedetail/{id}")]
        public ActionResult DeleteDetail(long id)
        {
            var generalCodeDetail = _unitOfWork.GeneralCodeDetail.Find(p => p.Id == id);
            if (generalCodeDetail != null)
            {
                _unitOfWork.GeneralCodeDetail.Delete(generalCodeDetail);
                _unitOfWork.Save();
                return Ok();
            }

            return NotFound();
        }

    }
}