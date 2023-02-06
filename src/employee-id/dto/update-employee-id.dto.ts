import { PartialType } from '@nestjs/swagger';
import { CreateEmployeeIdDto } from './create-employee-id.dto';

export class UpdateEmployeeIdDto extends PartialType(CreateEmployeeIdDto) {}
