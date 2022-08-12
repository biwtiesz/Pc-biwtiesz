namespace DigitalAppraisal.Data.Interfaces
{
    public interface IUnitOfWork
    {
        IParameterRepository Parameter { get; }
        void Save();
    }
}