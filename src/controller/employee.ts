import { getManager } from "typeorm";
import { Employee } from "../entity/Employee";

export class employeeController {
   async save (employee: Employee) {
       const employeeSave = await getManager().save(employee);
       return employeeSave;
   }
   async listEmployees (){
       const employees = await getManager().find(Employee);
       return employees;
   }    
   async getEmployee (id: string){
       const employee = await getManager().findOne(Employee, id);
       return employee;
   }
   async getQuestionsEmployee(id: number){
       const employee = await getManager().findOne(Employee, id, {
           relations: ['questions']});
       return employee.questions;
   }
}