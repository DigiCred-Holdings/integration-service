import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User {
  @ApiProperty({ description: 'The unique identifier of the user' })
  @PrimaryGeneratedColumn()
  id: string;

  @ApiProperty({ description: 'The name of the user' })
  @Column()
  firstName: string;

  @ApiProperty({ description: 'The phone number of the user' })
  @Column()
  phoneNumber: string;

  @ApiProperty({ description: 'The last name of the user' })
  @Column()
  lastName: string;

  @ApiProperty({ description: 'The home address of the user' })
  @Column()
  homeAddress: string;

  @ApiProperty({ description: 'Is the user a US citizen?' })
  @Column()
  isUSCitizen: string;

  @ApiProperty({ description: 'The intended major of the user' })
  @Column()
  intendedMajor: string;

  @ApiProperty({ description: 'The extracurricular activities of the user' })
  @Column()
  extracurricularActivities: string;
}
