import {ApiProperty} from "@nestjs/swagger";

export class CreateTestApiDto {
    @ApiProperty()
    name: string
}
