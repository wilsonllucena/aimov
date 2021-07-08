import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateScore1625608140718 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "scores",
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
                        name: "title",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "varchar",
                        length: "300",
                        isNullable: true
                    },
                    {
                        name: "value",
                        type: "int"
                    },
                    {
                        name: "active",
                        type: "boolean",
                        default: true
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("scores")
    }

}
