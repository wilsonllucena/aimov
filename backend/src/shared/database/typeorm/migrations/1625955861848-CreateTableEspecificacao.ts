import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableEspecificacao1625955861848 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'especificacoes',
            columns: [
              {
                name: 'id',
                type: 'int',
                isPrimary: true
              },
              {
                name: 'quantidade_quartos',
                type: 'int',
                default: 1,
              },
              {
                name: 'quantidade_suites',
                type: 'int',
                default: 0,
              },
              {
                name: 'garagem',
                type: 'boolean',
                default: false
              },
              {
                name: 'metragem',
                type: 'int',
              },
              {
                name: 'tipo',
                type: 'varchar',
                isNullable: true
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
        await queryRunner.dropTable('especificacoes');
      }

}
