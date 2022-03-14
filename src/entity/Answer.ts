import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Employee } from "./Employee";
import { Question } from "./Question";
@Entity()
export class Answer {
    constructor(description: string, question: Question) {
        this.description = description;
        this.question = question;
    }

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    description: string;

    @ManyToOne(() => Employee)
    employee: string;

    @ManyToOne(() => Question)
    question: Question;
}