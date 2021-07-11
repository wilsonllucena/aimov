import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class CreateForeingKeysSituacaoImovel1626035629068 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey('situacoes_imovel', new TableForeignKey(
            {
                name: 'ImovelSituacao',
                columnNames: ['id_imovel'],
                referencedColumnNames: ['id'],
                referencedTableName: 'imoveis',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
              },
        ))
        await queryRunner.createForeignKey('situacoes_imovel', new TableForeignKey(
              {
                name: 'SituacaoImovel',
                columnNames: ['id_situacao'],
                referencedColumnNames: ['id'],
                referencedTableName: 'situacao',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
              },
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('situacoes_imovel', 'ImovelSituacao');
        await queryRunner.dropForeignKey('situacoes_imovel', 'AppointmentProvider');
    }

}
