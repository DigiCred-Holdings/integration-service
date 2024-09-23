import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  @ApiProperty({ description: 'The first name of the user' })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({ description: 'The last name of the user' })
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({ description: 'The phone number of the user' })
  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @ApiProperty({ description: 'The home address of the user' })
  @IsNotEmpty()
  @IsString()
  homeAddress: string;

  @ApiProperty({ description: 'Is the user a US citizen?' })
  @IsNotEmpty()
  @IsString()
  isUSCitizen: string;

  @ApiProperty({ description: 'The intended major of the user' })
  @IsNotEmpty()
  @IsString()
  intendedMajor: string;

  @ApiProperty({ description: 'The extracurricular activities of the user' })
  @IsNotEmpty()
  @IsString()
  extracurricularActivities: string;
}
