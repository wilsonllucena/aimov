import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableSituacao1625955971836 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'situacao',
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
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'now()',
                },
              ],
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('situacao');
    }
}
