using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DigitalAppraisal.Migrations
{
    public partial class fieldActive : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Active",
                table: "GeneralCodeDetail",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Active",
                table: "GeneralCodeDetail");
        }
    }
}
