import { Request, Response, Router } from "express";
import { employeeController } from "../controller/employee";
import { Employee } from "../entity/Employee";

export const routerEmployee = Router()
const employeeCtrl = new employeeController

routerEmployee.post('/', async (request:Request, response:Response) => {
    const {name, email, password, role} = request.body;
    const newEmployee = new Employee(name, email, password, role);
    const saveEmployee = await employeeCtrl.save(newEmployee);
    response.status(200).json(saveEmployee);
});

routerEmployee.get('/', async (request:Request, response:Response) => {
    const Employees = await employeeCtrl.listEmployees();
    response.status(200).json(Employees);
});

routerEmployee.get('/employee/:id', async (request:Request, response:Response) => {
    const {id} = request.params
    const employee = await employeeCtrl.getEmployee(id)
    response.status(200).json(employee)
});