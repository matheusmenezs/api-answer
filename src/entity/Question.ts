import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Employee } from "./Employee";
@Entity()
export class Question {
    constructor(description: string) {
        this.description = description;
    }

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    description: string;

    @ManyToOne(() => Employee, employee => employee.questions)
    employee: string;
}