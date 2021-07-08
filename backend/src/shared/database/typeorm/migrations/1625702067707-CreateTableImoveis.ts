import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableImoveis1625702067707 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'imoveis',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'uuid',
            type: 'uuid',
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'nome_proprietario',
            type: 'varchar',
          },
          {
            name: 'cpf_proprietario',
            type: 'varchar',
          },
          {
            name: 'cep',
            type: 'varchar',
          },
          {
            name: 'endereco',
            type: 'varchar',
          },
          {
            name: 'cidade',
            type: 'varchar',
          },
          {
            name: 'bairro',
            type: 'varchar',
          },
          {
            name: 'regiao',
            type: 'varchar',
          },
          {
            name: 'quantidade_quarto',
            type: 'int',
            default: 0,
          },
          {
            name: 'quantidade_suite',
            type: 'int',
            default: 0,
          },
          {
            name: 'tipo_imovel',
            type: 'int',
            default: 1,
          },
          {
            name: 'categoria_imovel',
            type: 'int',
            default: 1,
          },
          {
            name: 'garagem',
            type: 'boolean',
            default: false,
          },
          {
            name: 'metragem',
            type: 'int',
          },
          {
            name: 'data_anuncio',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'data_venda',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'data_cadastro',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'observacoes',
            type: 'varchar',
            length: '500',
            isNullable: true,
          },
          {
            name: 'id_usuario_responsavel',
            type: 'uuid',
          },
          {
            name: 'id_usuario_ultima_alteracao',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'update_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'situacao',
            type: 'int',
            default: 1,
          },
          {
            name: 'ativo',
            type: 'boolean',
            default: true,
          },
        ],
      }),
    );

    // await queryRunner.createForeignKey(
    //   'users',
    //   new TableForeignKey({
    //     name: 'ImovelUsuarioResponsavel',
    //     columnNames: ['id_usuario_responsavel'],
    //     referencedColumnNames: ['id'],
    //     referencedTableName: 'users',
    //     onDelete: 'SET NULL',
    //     onUpdate: 'CASCADE',
    //   }),
    // );

    // await queryRunner.createForeignKey(
    //   'users',
    //   new TableForeignKey({
    //     name: 'ImovelUsuarioUltimaAlteracao',
    //     columnNames: ['id_usuario_ultima_alteracao'],
    //     referencedColumnNames: ['id'],
    //     referencedTableName: 'users',
    //     onDelete: 'SET NULL',
    //     onUpdate: 'CASCADE',
    //   }),
    // );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.dropForeignKey('users', 'ImovelUsuarioResponsavel');
    // await queryRunner.dropForeignKey('users', 'ImovelUsuarioUltimaAlteracao');
    await queryRunner.dropTable('imoveis');
  }
}
