using System.Linq.Expressions;
using DigitalAppraisal.Data.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace DigitalAppraisal.Data.Repository
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly ApplicationDbContext _context;
        private DbSet<T> dbSet;

        public Repository(ApplicationDbContext context)
        {
            _context = context;
            dbSet = context.Set<T>();
        }

        public IEnumerable<T> FindAll()
        {
            return dbSet.ToList();
        }

        public IEnumerable<T> FindAll(Expression<Func<T, bool>> condition)
        {
            return dbSet.Where(condition).ToList();
        }

        public T Find(Expression<Func<T, bool>> condition)
        {
            return dbSet.Where(condition).FirstOrDefault();
        }

        public void Create(T t)
        {
            dbSet.Add(t);
        }

        public void Delete(T t)
        {
            dbSet.Remove(t);
        }
    }
}