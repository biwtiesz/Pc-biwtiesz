namespace DigitalAppraisal.Data.Interfaces
{
    public interface IUnitOfWork
    {
        IParameterRepository Parameter { get; }
        IGeneralCodeRepository GeneralCode { get; }
        IGeneralCodeDetailRepository GeneralCodeDetail { get; }
        void Save();
    }
}