import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableImovel1625956017151 implements MigrationInterface {
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
            name: 'id_proprietario',
            type: 'int',
          },
          {
            name: 'id_especificacao',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'id_situacao_imovel',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'id_autorizacao',
            type: 'int',
            isNullable: true,
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
            name: 'data_anuncio',
            type: 'timestamp',
            isNullable: true,
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
            name: 'ativo',
            type: 'boolean',
            default: true,
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'ProprietarioImovel',
            columnNames: ['id_proprietario'],
            referencedColumnNames: ['id'],
            referencedTableName: 'proprietarios',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'AutorizacaoImovel',
            columnNames: ['id_autorizacao'],
            referencedColumnNames: ['id'],
            referencedTableName: 'tipo_autorizacao',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'EspecificacaoImovel',
            columnNames: ['id_especificacao'],
            referencedColumnNames: ['id'],
            referencedTableName: 'especificacoes',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'SituacaoImovel',
            columnNames: ['id_situacao_imovel'],
            referencedColumnNames: ['id'],
            referencedTableName: 'situacoes_imovel',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'UsuarioResponsavelImovel',
            columnNames: ['id_usuario_responsavel'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'UsuarioUltimaAlteracaoImovel',
            columnNames: ['id_usuario_ultima_alteracao'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('imoveis');
  }
}
