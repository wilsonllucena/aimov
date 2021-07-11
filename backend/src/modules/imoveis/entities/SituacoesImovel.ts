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
import Situacao from './Situacao';
  
@Entity('situacoes_imovel')
class SituacoesImovel {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  id_imovel: number;
  @Column()
  id_situacao: number;
  @ManyToOne(() => Imovel)
  @JoinColumn({name: 'id_imovel'})
  imovel: Imovel;
  @ManyToOne(() => Situacao)
  @JoinColumn({name: 'id_situacao'})
  situacao: Situacao;
  @Column()
  justificativa: string;
  @Column()
  data_venda?: Date;
  @Exclude()
  @CreateDateColumn()
  created_at: Date;
} 

export default SituacoesImovel;