import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableSituacaoImovel1625702945490 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'situacao_imovel',
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
                    name: 'justificativa',
                    type: 'varchar',
                    length: '500',
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
        await queryRunner.dropTable('situacao_imovel');

    }

}
