import {ApiProperty} from "@nestjs/swagger";

export class CreateUserApiDto {
    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty()
    test_id: number;

}
