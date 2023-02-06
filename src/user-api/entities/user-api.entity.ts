import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import {TestApi} from "../../test-api/entities/test-api.entity";
import {EmployeeApi} from "../../employee-id/entities/employee-id.entity";

@Entity()
export class UserApi {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @ManyToOne(() => TestApi, (test) => test.users)
    @JoinColumn({name: 'test_id', referencedColumnName: 'id'})
    tests: TestApi;

    @Column()
    test_id: number

    @OneToMany(() => EmployeeApi, (employee) => employee.users)
    employees: EmployeeApi[];

}
