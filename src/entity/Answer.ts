import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Employee } from "./Employee";
import { Question } from "./Question";
@Entity()
export class Answer {
    constructor(description: string, employee: Employee, question: Question) {
        this.description = description;
        this.employee = employee;
        this.question = question;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @ManyToOne(() => Employee)
    employee: Employee;

    @ManyToOne(() => Question)
    question: Question;
}