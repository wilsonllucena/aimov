import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableSituacaoImovel1625955984772
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'situacoes_imovel',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'id_imovel',
            type: 'int',
          },
          {
            name: 'id_situacao',
            type: 'int',
          },
          {
            name: 'justificativa',
            type: 'varchar',
            length: '500',
            isNullable: true,
          },
          {
            name: 'data_venda',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ]
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('situacoes_imovel');
  }
}
