import {
    Body,
    Controller,
    Delete,
    Param,
    Get,
    Patch,
    UseGuards,
  } from '@nestjs/common';
  import { JoiPipe } from 'nestjs-joi';
  import { User } from '../user/entities/user.entity';
  import { UpdateUserDto} from '../user/dto/update-user.dto';
  import { UsersService } from './user.service';
  import { JwtAuthGuard } from 'src/modules/infrastructure/auth/auth.guard';
  import { AuthUser } from 'src/common/decorators/auth-user.decorator';

@Controller("users")
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private userService: UsersService) {}

  @Get("getMe/:id")
  async findOne(
    @AuthUser() user: User,
  ): Promise<User> {
    return this.userService.findOne(user.id);
  }
  // findOne(@Param('id') id: string): Promise<User> {
  //   return this.userService.findOne(id)
  // }

  @Patch('editMe/:id')
  updateUser(
    @AuthUser() user: User,
    @Param('id') id: string,
    @Body(new JoiPipe({group: 'EDIT'})) updateUserDto: UpdateUserDto,
  ): Promise <User> {
    return this.userService.updateUser(updateUserDto, user.id);
  }

    @Delete("delete/:id")
    async remove(
      @Param('id') id: string) {
        return await this.userService.remove(id);
      }
  }