import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
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
  }
  
  export {Imagens};
  