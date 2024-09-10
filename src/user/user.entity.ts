import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User {
  @ApiProperty({ description: 'The unique identifier of the user' })
  @PrimaryGeneratedColumn()
  id: string;

  @ApiProperty({ description: 'The name of the user' })
  @Column()
  name: string;

  @ApiProperty({ description: 'The email of the user', uniqueItems: true })
  @Column({ unique: true })
  email: string;

  @ApiProperty({ description: 'The phone number of the user' })
  @Column()
  phone: string;
}
