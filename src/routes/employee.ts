import { Request, Response, Router } from "express";
import { validationResult } from "express-validator";
import { employeeController } from "../controller/employee";
import { Employee } from "../entity/Employee";
import { employeeValidator } from "../validations/employeeValidator";

export const routerEmployee = Router();
const employeeCtrl = new employeeController;

routerEmployee.post('/', employeeValidator, async (request: Request, response: Response) => {
    const { name, email, password, role } = request.body;
    const errors = validationResult(request);
    if (errors.isEmpty()) {
        const newEmployee = new Employee(name, email, password, role);
        const saveEmployee = await employeeCtrl.save(newEmployee);
        response.status(200).json(saveEmployee);
    } else {
        response.status(400).json(errors);
    }
});

routerEmployee.get('/', async (request: Request, response: Response) => {
    const employees = await employeeCtrl.listEmployees();
    if (employees.length > 0) {
        response.status(200).json(employees);
    } else {
        response.status(200).json({ message: "Not found employees" });
    }
});

routerEmployee.get('/search/:id', async (request: Request, response: Response) => {
    const { id } = request.params;
    const employee = await employeeCtrl.getEmployee(id);
    if (employee) {
        response.status(200).json(employee);
    } else {
        response.status(200).json({ message: "Not found employee" });
    }
});

routerEmployee.get('/questions/:idEmployee', async (request: Request, response: Response) => {
    const {idEmployee} = request.params;
    try {
        const questions = await employeeCtrl.getQuestionsEmployee(idEmployee);
        if (questions.length > 0) {
            return response.status(200).json(questions);
        } else
            return response.status(400).json({ error: "Not found questions" });
    }
    catch (error) {
        return response.status(400).json({ error: "Not found employee" });
    }
})