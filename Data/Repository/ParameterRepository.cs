using DigitalAppraisal.Data.Interfaces;
using DigitalAppraisal.Entities;

namespace DigitalAppraisal.Data.Repository
{
    public class ParameterRepository : Repository<Parameter>, IParameterRepository
    {
        private readonly ApplicationDbContext _context;

        public ParameterRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;
        }

        public void Edit(Parameter parameter)
        {
            _context.Parameter.Update(parameter);
        }
    }
}