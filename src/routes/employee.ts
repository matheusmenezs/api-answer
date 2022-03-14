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
        response.status(200).json({
            name: saveEmployee.name,
            email: saveEmployee.email,
            role: saveEmployee.role,
            id: saveEmployee.id
        });
    } else {
        response.status(400).json(errors);
    }
});

routerEmployee.get('/', async (request: Request, response: Response) => {
    const employees = await employeeCtrl.listEmployees();
    if (employees.length > 0) {
        response.status(200).json(
            employees.map(employee => {
                const emp = {
                    "name": employee.name,
                    "email": employee.email,
                    "role": employee.role,
                    "id": employee.id
                }
                return emp
            }));
    } else {
        response.status(200).json({ message: "Not found employees" });
    }
});

routerEmployee.get('/search', async (request: Request, response: Response) => {
    const { employeeId } = request.body;
    try {
        const employee = await employeeCtrl.getEmployee(employeeId);
        if (employee) {
            response.status(200).json({
                name: employee.name,
                email: employee.email,
                role: employee.role,
                id: employee.id
            })
        } else {
            response.status(200).json({ message: "Not found employee" });
        }
    } catch {
        return response.status(400).json({ message: "This ID does not exist" });
    }

});

routerEmployee.get('/questions', async (request: Request, response: Response) => {
    const { employeeId } = request.body;
    try {
        const questions = await employeeCtrl.getQuestionsEmployee(employeeId);
        if (questions.length > 0) {
            return response.status(200).json(questions);
        } else
            return response.status(400).json({ error: "Not found questions" });
    }
    catch (error) {
        return response.status(400).json({ error: "Not found employee" });
    }
})