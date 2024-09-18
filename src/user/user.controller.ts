import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Param,
  Patch,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

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

  @Post('create')
  @ApiOperation({ summary: 'Create a new user' })
  async createUser(
    @Body()
    createUserDto: {
      workflowID: string;
      actionID: string;
      formData: UserDto;
    },
  ) {
    return await this.userService.createUser(createUserDto.formData);
  }

  @Patch(':userId')
  @ApiOperation({ summary: 'Update a user by ID' })
  @ApiParam({ name: 'userId', description: 'The ID of the user to update' })
  async updateUser(
    @Param('userId') userId: string,
    @Body() updateUserDto: UserDto,
  ) {
    return await this.userService.updateUser(userId, updateUserDto);
  }

  @Delete(':userId')
  @ApiOperation({ summary: 'Delete a user by ID' })
  @ApiParam({ name: 'userId', description: 'The ID of the user to delete' })
  async deleteUser(@Param('userId') userId: string) {
    return await this.userService.deleteUser(userId);
  }
}
