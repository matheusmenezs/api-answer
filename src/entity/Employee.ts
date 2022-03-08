import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Question } from "./Question";

export enum UserRole {
  employee = "employee",
  admin = "admin"
};
@Entity()
export class Employee {

  constructor(name: string, email: string, password: string, role: UserRole) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({type: "enum", enum: UserRole})
  readonly role: UserRole;

  @OneToMany(() => Question, question => question.employee)
  questions: Question[];
}
