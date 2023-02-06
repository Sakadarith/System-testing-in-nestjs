import {ApiProperty} from "@nestjs/swagger";

export class CreateEmployeeIdDto {
    @ApiProperty()
    firstName: string

    @ApiProperty()
    lastName: string

    @ApiProperty()
    memberCard: string

    @ApiProperty()
    salary: number

    @ApiProperty()
    user_id: number

}
