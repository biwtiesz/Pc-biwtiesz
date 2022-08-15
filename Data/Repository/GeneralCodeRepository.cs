using DigitalAppraisal.Data.Interfaces;
using DigitalAppraisal.Entities;

namespace DigitalAppraisal.Data.Repository
{
    public class GeneralCodeRepository : Repository<GeneralCode>, IGeneralCodeRepository
    {
        private readonly ApplicationDbContext _context;

        public GeneralCodeRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;
        }

        public void Edit(GeneralCode GeneralCode)
        {
            _context.GeneralCode.Update(GeneralCode);
        }
    }
}