/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TestApiService } from './test-api.service';
import { TestApiController } from './test-api.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {TestApi} from "./entities/test-api.entity";
@Module({
  imports: [TypeOrmModule.forFeature([TestApi])],
  controllers: [TestApiController],
  providers: [TestApiService],
})
export class TestApiModule {}
