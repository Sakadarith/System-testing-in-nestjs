import {Body, Injectable} from '@nestjs/common';
import { CreateUserApiDto } from './dto/create-user-api.dto';
import { UpdateUserApiDto } from './dto/update-user-api.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {UserApi} from "./entities/user-api.entity";
import {Repository} from "typeorm";

@Injectable()
export class UserApiService {
  constructor(@InjectRepository(UserApi)
  private userRepository: Repository<UserApi>
  ) {
  }

  async create(createUserApiDto: CreateUserApiDto): Promise<UserApi> {
    return this.userRepository.save(createUserApiDto);
  }

  async findAll() {
    return await this.userRepository.find({
      relations: {
        tests: true,
      }
    });
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({
      relations: {
        tests: true
      },
      where: {
        id
      }
    } );
  }

  async update(id: number, updateUserApiDto: UpdateUserApiDto) {
    return this.userRepository.update(id, updateUserApiDto);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
