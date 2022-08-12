using DigitalAppraisal.Entities;

namespace DigitalAppraisal.Data.Interfaces
{
    public interface IParameterRepository : IRepository<Parameter>
    {
        void Edit(Parameter parameter);
    }
}