import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { UserService } from './user.service';

@ApiTags('User') // Swagger group name for your API
@Controller('user') // Base route: /user
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Swagger documentation for the "get all users" endpoint
  @ApiOperation({ summary: 'Get all users' })
  @Get('all') // Route: GET /user/all
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  // Swagger documentation for the "get user by ID" endpoint
  @ApiOperation({ summary: 'Get a user by ID' })
  @ApiParam({ name: 'userId', description: 'The ID of the user' })
  @Get(':userId') // Route: GET /user/:userId
  getUserById(@Param('userId') userId: string) {
    return this.userService.getUserById(userId);
  }
}
