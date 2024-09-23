import { Module } from '@nestjs/common';
import { VerificationService } from './verification.service';
import { VerificationController } from './verification.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Verification } from './verification.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Verification])],
  providers: [VerificationService],
  controllers: [VerificationController],
})
export class VerificationModule {}
