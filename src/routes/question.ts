import { Router, Request, Response } from "express";
import { Question } from "../entity/Question";
import { questionController } from "../controller/question";
import { employeeController } from "../controller/employee";


export const routerQuestion = Router();
const questionCtrl = new questionController
const employeeCtrl = new employeeController

routerQuestion.post('/', async (request:Request, response:Response) => {
    const {employeeId, number, description} = request.body;
    const employee = await employeeCtrl.getEmployee(employeeId);
    if(employee){
        const question = new Question(number, description, employeeId);
        const saveQuestion = await questionCtrl.save(question);
        return response.status(200).json({questionSaved: saveQuestion, message: 'Question created successfully'})
    }else{
        return response.status(404).json({message: 'Employee not found!'})
    }

})