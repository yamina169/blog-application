import { MigrationInterface, QueryRunner } from "typeorm";

export class AddImageColumnToArticle1769893034868 implements MigrationInterface {
    name = 'AddImageColumnToArticle1769893034868'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" ADD "image" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "image"`);
    }

}
