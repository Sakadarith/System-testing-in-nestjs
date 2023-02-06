import { Injectable } from '@nestjs/common';
import { CreateTestApiDto } from './dto/create-test-api.dto';
import { UpdateTestApiDto } from './dto/update-test-api.dto';
import {TestApi} from "./entities/test-api.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class TestApiService {
  constructor(
      @InjectRepository(TestApi)
      private testRepository: Repository<TestApi>
  ) {}

  async create(createTestDto: CreateTestApiDto): Promise<TestApi>{
    return this.testRepository.save(createTestDto);
  }

  async findAll(): Promise<TestApi[]> {
    return this.testRepository.find();
  }

  async findOne(id: number): Promise<TestApi> {
    return this.testRepository.findOneBy({id});
  }

  async update(id: number, updateTestApiDto: UpdateTestApiDto) {
    return this.testRepository.update(id, updateTestApiDto);
  }

  async remove(id: number): Promise<void> {
    await this.testRepository.delete(id);
  }
}
