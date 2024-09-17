import { Controller, Get } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('microservice')
export class MicroserviceController {
  private client: ClientProxy;

  constructor() {
    // Initialize TCP client that connects to the microservice
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 8877,
      },
    });
  }

  @ApiOperation({ summary: 'Get the sum of an array of numbers' })
  @ApiResponse({ status: 200, description: 'The sum has been calculated' })
  @Get()
  async getSum() {
    // Send a message to the microservice with pattern 'sum'
    const result = await this.client
      .send<number, number[]>('sum', [1, 2, 3])
      .toPromise();
    console.log('Response from microservice:', result);
    return `Sum: ${result}`;
  }
}
