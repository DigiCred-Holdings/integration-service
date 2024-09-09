import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { VerificationService } from './verification.service';

@ApiTags('Verrification')
@Controller('verification')
export class VerificationController {
  constructor(private readonly verificationService: VerificationService) {}

  @Get('all')
  @ApiOperation({ summary: 'Get all verifications' })
  async getAllVerifications() {
    return await this.verificationService.getAllVerifications();
  }

  @Get(':verificationId')
  @ApiOperation({ summary: 'Get a verification by ID' })
  @ApiParam({
    name: 'verificationId',
    description: 'The ID of the verification',
  })
  async getVerificationById(@Param('verificationId') verificationId: string) {
    return await this.verificationService.getVerificationById(verificationId);
  }
}
