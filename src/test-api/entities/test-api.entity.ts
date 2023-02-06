import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UserApi} from "../../user-api/entities/user-api.entity";

@Entity()
export class TestApi {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => UserApi, (user) => user.tests)
    users: UserApi[];
}
