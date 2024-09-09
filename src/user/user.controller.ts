import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  @ApiOperation({ summary: 'Get all users' })
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Get a user by ID' })
  @ApiParam({ name: 'userId', description: 'The ID of the user' })
  async getUserById(@Param('userId') userId: string) {
    return await this.userService.getUserById(userId);
  }
}
