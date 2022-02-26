import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

export type UserRole =  "admin" | "employee"

@Entity()
export class Employee {
    
    constructor(name:string, email:string, password:string, role:UserRole){
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({
        type: "enum",
        enum: ["admin", "employee"],
    })
    role: UserRole;

}
