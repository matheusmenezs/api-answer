import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./Employee";


@Entity()
export class Question {
    constructor(id: number, description: string, employee: Employee){
        this.id = id;
        this.description = description;
        this.employeeId = employee;
    }

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    description: string;

    @ManyToOne(() => Employee)
    employeeId: Employee;
}