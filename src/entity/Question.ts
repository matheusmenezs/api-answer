import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Employee } from "./Employee";
@Entity()
export class Question {
    constructor(description: string, employee: Employee) {
        this.description = description;
        this.employee = employee;
    }

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    description: string;

    @ManyToOne(() => Employee, employee => employee.questions)
    employee: Employee;
}