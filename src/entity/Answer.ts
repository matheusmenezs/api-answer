import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { employeeController } from "../controller/employee";
import { Employee } from "./Employee";
import { Question } from "./Question";

@Entity()
export class Answer{
    constructor(description: string, employee: Employee, question: Question){
        this.description = description;
        this.employeeId = employee;
        this.questionId = question;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @ManyToOne(() => Employee, employeeId => employeeId)
    employeeId: Employee;

    @OneToOne(() => Question, questionId => questionId)
    questionId: Question;
}