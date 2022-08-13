using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DigitalAppraisal.Migrations
{
    public partial class AddParameterTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Parameter",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Group = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Order = table.Column<int>(type: "int", nullable: false),
                    Language = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Active = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Parameter", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Parameter");
        }
    }
}
