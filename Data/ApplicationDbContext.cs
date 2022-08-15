using DigitalAppraisal.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DigitalAppraisal.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Parameter> Parameter { get; set; }
        public DbSet<GeneralCode> GeneralCode { get; set; }
        public DbSet<GeneralCodeDetail> GeneralCodeDetail { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<ApplicationUser>(b =>
            {
                b.ToTable("User");
            });

            modelBuilder.Entity<IdentityUserClaim<string>>(b =>
            {
                b.ToTable("UserClaim");
            });

            modelBuilder.Entity<IdentityUserLogin<string>>(b =>
            {
                b.ToTable("UserLogin");
            });

            modelBuilder.Entity<IdentityUserToken<string>>(b =>
            {
                b.ToTable("UserToken");
            });

            modelBuilder.Entity<IdentityRole>(b =>
            {
                b.ToTable("Role");
            });

            modelBuilder.Entity<IdentityRoleClaim<string>>(b =>
            {
                b.ToTable("RoleClaim");
            });

            modelBuilder.Entity<IdentityUserRole<string>>(b =>
            {
                b.ToTable("UserRole");
            });
        }
    }


}