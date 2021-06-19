import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity("users")
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  last_name: string;
  @Column()
  email: string;
  @Column()
  @Exclude()
  password: string;
  @Column()
  is_admin?: boolean;
  @Column()
  active?: boolean;
  @Column()
  avatar?: string;
  @Exclude()
  @CreateDateColumn()
  created_at: Date;
}

export default User;