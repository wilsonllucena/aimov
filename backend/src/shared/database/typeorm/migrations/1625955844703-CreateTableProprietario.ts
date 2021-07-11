import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableProprietario1625955844703 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'proprietarios',
            columns: [
              {
                name: 'id',
                type: 'int',
                isPrimary: true
              },
              {
                name: 'nome',
                type: 'varchar',
              },
              {
                name: 'documento',
                type: 'varchar',
                isNullable: true,
                isUnique: true
              },
              {
                name: 'email',
                type: 'varchar',
                isNullable: true,
                isUnique: true
              },
              {
                name: 'telefone',
                type: 'varchar',
                isNullable: true,
              },
              {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()',
              },
            ],
          }),
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('proprietarios');
      }

}
