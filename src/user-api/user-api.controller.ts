import {Controller, Get, Post, Body, Patch, Param, Delete, Put} from '@nestjs/common';
import { UserApiService } from './user-api.service';
import { CreateUserApiDto } from './dto/create-user-api.dto';
import { UpdateUserApiDto } from './dto/update-user-api.dto';
import {ApiTags} from "@nestjs/swagger";

@Controller('user-api') @ApiTags('user')
export class UserApiController {
  constructor(private readonly userApiService: UserApiService) {}

  @Post()
  create(@Body() createUserApiDto: CreateUserApiDto) {
    return this.userApiService.create(createUserApiDto);
  }

  @Get()
  findAll() {
    return this.userApiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userApiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserApiDto: UpdateUserApiDto) {
    return this.userApiService.update(+id, updateUserApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userApiService.remove(+id);
  }
}
