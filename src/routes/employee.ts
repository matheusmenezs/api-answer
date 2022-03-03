import { Request, Response, Router } from "express";
import { employeeController } from "../controller/employee";
import { Employee } from "../entity/Employee";
import { validate } from 'class-validator';

export const routerEmployee = Router();
const employeeCtrl = new employeeController;

routerEmployee.post('/', async (request:Request, response:Response) => {
    const {name, email, password, role} = request.body;
    const newEmployee = new Employee(name, email, password, role);

    const errors = await validate(newEmployee);
    
    if(errors.length == 0){
        const saveEmployee = await employeeCtrl.save(newEmployee);
        response.status(200).json(saveEmployee);
    }else{
        response.status(400).json(errors);
    }
});

routerEmployee.get('/', async (request:Request, response:Response) => {
    const Employees = await employeeCtrl.listEmployees();
    response.status(200).json(Employees);
});

routerEmployee.get('/search/:id', async (request:Request, response:Response) => {
    const {id} = request.params;
    const employee = await employeeCtrl.getEmployee(id);
    response.status(200).json(employee);
});

routerEmployee.get('/questions/:idEmployee', async (request:Request, response:Response) => {
    const idEmployee = parseInt(request.params.idEmployee);
    const questions = await employeeCtrl.getQuestionsEmployee(idEmployee);
   
    if(questions){
        response.status(200).json(questions);
    }else{
        response.status(400).json({message: "Not found questions"});
    }
    
})