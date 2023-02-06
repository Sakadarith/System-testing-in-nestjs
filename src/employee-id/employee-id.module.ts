import { Module } from '@nestjs/common';
import { EmployeeIdService } from './employee-id.service';
import { EmployeeIdController } from './employee-id.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {EmployeeApi} from "./entities/employee-id.entity";

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeApi])],
  controllers: [EmployeeIdController],
  providers: [EmployeeIdService]
})
export class EmployeeIdModule {}
