import {Controller, Get, Post, Body, Patch, Param, Delete, Put} from '@nestjs/common';
import { EmployeeIdService } from './employee-id.service';
import { CreateEmployeeIdDto } from './dto/create-employee-id.dto';
import { UpdateEmployeeIdDto } from './dto/update-employee-id.dto';
import {ApiTags} from "@nestjs/swagger";

@Controller('employee-id') @ApiTags('Employees')
export class EmployeeIdController {
  constructor(private readonly employeeIdService: EmployeeIdService) {}

  @Post()
  create(@Body() createEmployeeIdDto: CreateEmployeeIdDto) {
    return this.employeeIdService.create(createEmployeeIdDto);
  }

  @Get()
  findAll() {
    return this.employeeIdService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeIdService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeIdDto: UpdateEmployeeIdDto) {
    return this.employeeIdService.update(+id, updateEmployeeIdDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeIdService.remove(+id);
  }
}
