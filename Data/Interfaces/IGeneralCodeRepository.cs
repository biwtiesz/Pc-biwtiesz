using DigitalAppraisal.Entities;

namespace DigitalAppraisal.Data.Interfaces
{
    public interface IGeneralCodeRepository : IRepository<GeneralCode>
    {
        void Edit(GeneralCode GeneralCode);
    }
}