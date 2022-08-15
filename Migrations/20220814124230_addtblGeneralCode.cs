using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DigitalAppraisal.Migrations
{
    public partial class addtblGeneralCode : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Active",
                table: "Parameter");

            migrationBuilder.CreateTable(
                name: "GeneralCode",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Group = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LocalDescription = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GeneralCode", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "GeneralCodeDetail",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Group = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Order = table.Column<int>(type: "int", nullable: false),
                    Language = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GeneralCodeDetail", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "GeneralCode");

            migrationBuilder.DropTable(
                name: "GeneralCodeDetail");

            migrationBuilder.AddColumn<bool>(
                name: "Active",
                table: "Parameter",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }
    }
}
