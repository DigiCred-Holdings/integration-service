import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Verification {
  @ApiProperty({ description: 'The unique identifier of the verification' })
  @PrimaryGeneratedColumn()
  id: string;

  @ApiProperty({ description: 'The ID of the related connection' })
  @Column()
  connectionId: string;

  @ApiProperty({ description: 'The verification data as a JSON object' })
  @Column('json')
  verificationData: object;

  @ApiProperty({ description: 'The creation date of the verification' })
  @CreateDateColumn()
  date: Date;

  @ApiProperty({
    description: 'The status of the verification',
    default: 'pending',
  })
  @Column({ default: 'pending' })
  status: string;
}
