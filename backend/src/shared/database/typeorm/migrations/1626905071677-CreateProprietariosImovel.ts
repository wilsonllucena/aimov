import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProprietariosImovel1626905071677
	implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "proprietarios_imovel",
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
					},
					{
						name: "documento",
						type: "varchar",
						isNullable: true,
						isUnique: true,
					},
					{
						name: "email",
						type: "varchar",
						isNullable: true,
						isUnique: true,
					},
					{
						name: "telefone",
						type: "varchar",
						isNullable: true,
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
						name: "fk_proprietarios_imovel",
						columnNames: ["id_imovel"],
                        referencedColumnNames: ["id"],
						referencedTableName: "imoveis",
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("proprietarios_imovel");
	}
}
