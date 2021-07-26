import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateImagesImovel1626905524466 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "images_imovel",
				columns: [
					{
						name: "id",
						type: "int",
						isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
					},
                    {
						name: "nome",
						type: "varchar",
						isNullable: true,
					},
					{
						name: "image",
						type: "varchar",
					},
					{
						name: "id_imovel",
						type: "int",
					},
					{
						name: "created_at",
						type: "timestamp",
						default: "now()",
					},
				],

				foreignKeys: [
					{
						name: "fk_images_imovel",
						columnNames: ["id_imovel"],
						referencedTableName: "imoveis",
						referencedColumnNames: ["id"],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("images_imovel");
	}
}
