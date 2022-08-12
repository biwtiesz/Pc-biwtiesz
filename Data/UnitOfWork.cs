using DigitalAppraisal.Data.Interfaces;
using DigitalAppraisal.Data.Repository;

namespace DigitalAppraisal.Data
{
    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        private readonly ApplicationDbContext _context;

        public IParameterRepository Parameter { get; private set; }

        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;

            Parameter = new ParameterRepository(context);
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}