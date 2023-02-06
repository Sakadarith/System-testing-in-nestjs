import {Body, Injectable} from '@nestjs/common';
import { CreateEmployeeIdDto } from './dto/create-employee-id.dto';
import { UpdateEmployeeIdDto } from './dto/update-employee-id.dto';
import {EmployeeApi} from "./entities/employee-id.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class EmployeeIdService {
  constructor(@InjectRepository(EmployeeApi)
      private employeeRepository: Repository<EmployeeApi>) {
  }
  async create(createEmployeeIdDto: CreateEmployeeIdDto): Promise<EmployeeApi> {
    return this.employeeRepository.save(createEmployeeIdDto);
  }

  async findAll() {
    return await this.employeeRepository.find({
      relations: {
        users: true,
      }
    });
  }

  async findOne(id: number) {
    return await this.employeeRepository.findOne({
      relations: {
        users: true
      }, where: {
        id
      }
    });
  }

  async update(id: number, updateEmployeeIdDto: UpdateEmployeeIdDto) {
    return await this.employeeRepository.update(id, updateEmployeeIdDto);
  }

  async remove(id: number): Promise<void> {
    await this.employeeRepository.delete(id);
  }
}
