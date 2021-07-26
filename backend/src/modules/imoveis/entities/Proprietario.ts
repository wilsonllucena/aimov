import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import { Exclude } from 'class-transformer';
import Imovel from './Imovel';
  
@Entity('proprietarios_imovel')
class Proprietario {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nome: string;
  @Column()
  documento?: string;
  @Column()
  email?: string;
  @Column()
  telefone: string;
  @ManyToOne(() => Imovel)
  @JoinColumn({name: 'id_imovel'})
  imovel: Imovel;
  @Exclude()
  @CreateDateColumn()
  created_at: Date;
} 
export default Proprietario;