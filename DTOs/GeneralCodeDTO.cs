using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using DigitalAppraisal.Entities;

namespace DigitalAppraisal.DTOs
{
    public class GeneralCodeDTO
    {
        public long Id { get; set; }
        public string Group { get; set; }
        public string Description { get; set; }
        public string LocalDescription { get; set; }

        public List<GeneralCodeDetail> GeneralCodeDetail { get; set; }
    }
}