import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import { Exclude, Expose } from 'class-transformer';
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
  @Column()
  id_imovel: number;
  @Expose({ name: 'imovel' })
  @ManyToOne(() => Imovel)
  @JoinColumn({name: 'id_imovel'})
  imovel: Imovel;

  @CreateDateColumn()
  created_at: Date;
} 
export default Proprietario;