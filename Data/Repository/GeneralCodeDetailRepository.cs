using DigitalAppraisal.Data.Interfaces;
using DigitalAppraisal.Entities;

namespace DigitalAppraisal.Data.Repository
{
    public class GeneralCodeDetailRepository : Repository<GeneralCodeDetail>, IGeneralCodeDetailRepository
    {
        private readonly ApplicationDbContext _context;

        public GeneralCodeDetailRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;
        }
        public void Edit(GeneralCodeDetail GeneralCodeDetail)
        {
            throw new NotImplementedException();
        }
    }
}