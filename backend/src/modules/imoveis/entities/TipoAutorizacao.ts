import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import { Exclude } from 'class-transformer';
  
@Entity('tipo_autorizacao')
class TipoAutorizacao {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nome: string;
  @Exclude()
  @CreateDateColumn()
  created_at: Date;
} 
export default TipoAutorizacao;