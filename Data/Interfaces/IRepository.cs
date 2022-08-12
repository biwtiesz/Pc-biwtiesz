using System.Linq.Expressions;

namespace DigitalAppraisal.Data.Interfaces
{
    public interface IRepository<T> where T : class
    {
        // FindAll
        IEnumerable<T> FindAll();

        // Find
        T Find(Expression<Func<T, bool>> condition);

        // Create
        void Create(T t);

        // Delete
        void Delete(T t);
    }
}