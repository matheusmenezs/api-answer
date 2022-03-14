import { Router } from "express";
import { Request, Response } from "express";
import { sign } from 'jsonwebtoken'
import { compare } from "bcryptjs";
import authController from "../controller/authEmployee";

export const routerAuthEmployee = Router()

routerAuthEmployee.post('/', async (request: Request, response: Response) => {
    const { email, password } = request.body;
    const employee = await authController.findEmployee(email);

    if (!employee) {
        return response.status(401).json({ error: "There is no employee with this email" });
    }
    
    const isValidPassword = await compare(password, employee.password);

    if (!isValidPassword) {
        return response.status(401).json({ error: "The password is incorrect" });
    }
    
    const token = sign({ id: employee.id }, 'secret', { expiresIn: '1d' });
    delete employee.password;

    return response.status(200).json({ employee, token });
})


