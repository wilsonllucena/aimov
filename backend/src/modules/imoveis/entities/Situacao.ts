import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import { Exclude } from 'class-transformer';
  
@Entity('situacao')
class Situacao {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nome: string;
  @Exclude()
  @CreateDateColumn()
  created_at: Date;
} 
export default Situacao;