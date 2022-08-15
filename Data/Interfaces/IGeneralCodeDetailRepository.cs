using DigitalAppraisal.Entities;

namespace DigitalAppraisal.Data.Interfaces
{
    public interface IGeneralCodeDetailRepository : IRepository<GeneralCodeDetail>
    {
        void Edit(GeneralCodeDetail GeneralCodeDetail);
    }
}