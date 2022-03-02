import {Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany} from "typeorm";
import { Question } from "./Question";
import { Length, IsEmail, IsEnum, IsNotEmpty } from "class-validator";


export enum UserRole {
  employee = 'employee',
  admin = 'admin'
}

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

    @Column({unique:true})
    @IsEmail()
    email: string;

    @Column()
    @Length(6, 30)
    password: string;

    @IsNotEmpty()
    @IsEnum(UserRole)
    readonly role: UserRole;

    @OneToMany(() => Question, question => question.employeeId)
    questions: Question[];
}
