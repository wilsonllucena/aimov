import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import { Exclude } from 'class-transformer';
  
@Entity('proprietarios')
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
  @Exclude()
  @CreateDateColumn()
  created_at: Date;
} 
export default Proprietario;