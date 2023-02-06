import { PartialType } from '@nestjs/swagger';
import { CreateUserApiDto } from './create-user-api.dto';

export class UpdateUserApiDto extends PartialType(CreateUserApiDto) {}
