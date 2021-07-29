import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import uploadConfig from '@config/upload';
import { Expose } from 'class-transformer';
import Imovel from './Imovel';
  
  @Entity('images_imovel')
  class Imagens {
  
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    id_imovel: number;
    @Column()
    nome: string;
    @Column()
    file: string;
    @ManyToOne(() => Imovel)
    @JoinColumn({name: 'id_imovel'})
    imovel: Imovel;
    @CreateDateColumn()
    created_at: Date;

    @Expose({ name: 'image_url' })
    getImageUrl(): string | null {
      if (!this.file) {
        return null;
      }
  
      switch (uploadConfig.driver) {
        case 'disk':
          return `${process.env.APP_API_URL}/files/${this.file}`;
        case 's3':
          return `https://${uploadConfig.config.aws.bucket}.s3.amazons.com.br/${this.file}`;
        default:
          return null;
      }
    };
  }
  
  export {Imagens};
  