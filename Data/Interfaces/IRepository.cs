using System.Linq.Expressions;

namespace DigitalAppraisal.Data.Interfaces
{
    public interface IRepository<T> where T : class
    {
        IEnumerable<T> FindAll();
        IEnumerable<T> FindAll(Expression<Func<T, bool>> condition);
        T Find(Expression<Func<T, bool>> condition);
        void Create(T t);
        void Delete(T t);
    }
}