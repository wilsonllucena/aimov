import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import SituacoesImovel from './SituacoesImovel';
import TipoAutorizacao from './TipoAutorizacao';
import Proprietario from './Proprietario';
import Especificacao from './Especificacao';

@Entity('imoveis')
class Imovel {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nome_proprietario: string;
  @Column()
  documento_proprietario: string;
  @Column()
  email_proprietario: string;
  @Column()
  telefone_proprietario: string;
//   @Column()
//   id_proprietario: number;
//   @Column()
//   id_especificacao: number;
  @Column()
  id_situacao_imovel: number;
  @Column()
  id_autorizacao: number;
//   @OneToOne(() => Especificacao)
//   @JoinColumn({name: 'id_especificacao'})
//   especificacao: Especificacao;
//   @OneToOne(() => Proprietario)
//   @JoinColumn({name: 'id_proprietario'})
//   proprietario: Proprietario;
  @OneToMany(() => SituacoesImovel, situacao => situacao.situacao)
  situacoes: SituacoesImovel[];
  @OneToOne(() => TipoAutorizacao)
  @JoinColumn({name: 'id_autorizacao'})
  autorizacao: TipoAutorizacao;
  @Column()
  cep: string;
  @Column()
  endereco: string;
  @Column()
  cidade: string;
  @Column()
  uf: string;
  @Column()
  bairro: string;
  @Column()
  regiao: string;
  @Column()
  latitude?: string;
  @Column()
  longitude?: string;
  @Column()
  data_anuncio?: Date;
  @Column()
  quantidade_quartos?: number;
  @Column()
  quantidade_suites?: number;
  @Column()
  tipo?: string;
  @Column()
  garagem?: boolean;
  @Column()
  metragem?: number;
  @Column()
  id_usuario_responsavel: string;
  @Column()
  id_usuario_ultima_alteracao?: string;
  @Column()
  ativo: boolean;
  @Column()
  observacoes?: string;
  
  @CreateDateColumn()
  created_at: Date;
  @Exclude()
  @UpdateDateColumn()
  updated_at: Date;
}

export default Imovel;
