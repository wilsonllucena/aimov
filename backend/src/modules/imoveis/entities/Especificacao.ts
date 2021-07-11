import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('especificacoes')
class Especificacao {

  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  quantidade_quartos?: number;
  @Column()
  quantidade_suites?: number;
  @Column()
  tipo?: number;
  @Column()
  garagem?: boolean;
  @Column()
  metragem?: number;
  @Exclude()
  @CreateDateColumn()
  created_at: Date;
}

export default Especificacao;
