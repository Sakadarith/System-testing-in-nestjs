import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TestApi} from "./test-api/entities/test-api.entity";
import { UserApiModule } from './user-api/user-api.module';
import {UserApi} from "./user-api/entities/user-api.entity";
import {TestApiModule} from "./test-api/test-api.module";
import { EmployeeIdModule } from './employee-id/employee-id.module';
import {EmployeeApi} from "./employee-id/entities/employee-id.entity";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'test',
    entities: [TestApi, UserApi, EmployeeApi],
    synchronize: true,
  }), UserApiModule, TestApiModule, EmployeeIdModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
