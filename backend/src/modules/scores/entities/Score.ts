import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity("scores")
class Score {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column('decimal')
  value: number;
  @Column()
  active?: boolean;
  @Exclude()
  @CreateDateColumn()
  created_at: Date;
}

export default Score;