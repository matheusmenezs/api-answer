import { Router, Request, Response } from "express";
import { Question } from "../entity/Question";
import { questionController } from "../controller/question";
import { questionValidator } from "../validations/questionValidator";
import { validationResult } from "express-validator";

export const routerQuestion = Router();
const questionCtrl = new questionController;

routerQuestion.post('/', questionValidator, async (request: Request, response: Response) => {
    const { description, employeeId } = request.body;
    const errors = validationResult(request)

    if (errors.isEmpty()) {
        const question = new Question(description);
        question.employee = request.employeeId
        const saveQuestion = await questionCtrl.save(question);
        return response.status(200).json({ question: saveQuestion, message: 'Question created successfully' });
    } else {
        return response.status(404).json(errors);
    }
})

routerQuestion.get('/list',async (request:Request, response:Response) => {
    const questions = await questionCtrl.listQuestions()
    console.log(questions)
    if(questions){
        return response.status(200).json(questions)
    }else{
        return response.status(200).json({message: 'Not found questions'})
    }
    
})