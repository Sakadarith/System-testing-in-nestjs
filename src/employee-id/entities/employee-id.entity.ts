import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UserApi} from "../../user-api/entities/user-api.entity";

@Entity()
export class EmployeeApi {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    memberCard: string

    @Column()
    salary: number

    @ManyToOne(() => UserApi, (user) => user.employees)
    @JoinColumn({name: 'user_id', referencedColumnName: 'id'})
    users: UserApi;

    @Column()
    user_id: number
}
