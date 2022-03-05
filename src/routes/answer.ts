import { Request, Response, Router } from "express";
import { getRepository } from "typeorm";
import { answerCtrl } from "../controller/answer";
import { Answer } from "../entity/Answer";


export const routerAnswer = Router()
const ctrlAnswer = new answerCtrl

routerAnswer.post('/', async (request: Request, response:Response) => {
    const {description, employeeId, questionId} = request.body
    const newAnswer = new Answer(description, employeeId, questionId)

    const saveAnswer = await ctrlAnswer.save(newAnswer)

    if(saveAnswer){
        response.status(200).json(saveAnswer)
    }else{
        response.status(400).json(saveAnswer)
    }
})