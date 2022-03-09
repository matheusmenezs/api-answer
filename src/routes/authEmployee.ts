import { Router } from "express";
import { Request, Response } from "express";
import authController from "../controller/authEmployee";

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

export const routerAuthEmployee = Router()

routerAuthEmployee.post('/', async (request: Request, response: Response) => {
    const { email, password } = request.body;
    const employee = await authController.findEmployee(email);

    if (!employee) {
        return response.status(401).json({ error: "There is no employee with this email" });
    }

    const isValidPassword = await bcrypt.compare(password, employee.password);

    if (!isValidPassword) {
        return response.status(401).json({ error: "The password is not valid" });
    }
    
    const token = jwt.sign({ id: employee.id }, 'secret', { expiresIn: '1d' });
    return response.status(200).json({ employee, token });
})


