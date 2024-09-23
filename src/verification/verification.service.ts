import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Verification } from './verification.entity';

@Injectable()
export class VerificationService {
  constructor(
    @InjectRepository(Verification)
    private readonly verificationRepository: Repository<Verification>,
  ) {}

  async getAllVerifications(): Promise<Verification[]> {
    return await this.verificationRepository.find();
  }

  async getVerificationById(verificationId: string): Promise<Verification> {
    const verification = await this.verificationRepository.findOneBy({
      id: verificationId,
    });
    if (!verification) {
      throw new NotFoundException(
        `Verification with ID ${verificationId} not found`,
      );
    }
    return verification;
  }
}
