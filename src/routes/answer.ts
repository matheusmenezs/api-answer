import { Request, Response, Router } from "express";
import { validationResult } from "express-validator";
import { answerCtrl } from "../controller/answer";
import { Answer } from "../entity/Answer";
import { answerValidator } from "../validations/answerValidator";

export const routerAnswer = Router()
const ctrlAnswer = new answerCtrl

routerAnswer.post('/', answerValidator, async (request: Request, response: Response) => {
    const { description, employeeId, questionId } = request.body
    const errors = validationResult(request)

    if (errors.isEmpty()) {
        const newAnswer = new Answer(description, employeeId, questionId)
        const saveAnswer = await ctrlAnswer.save(newAnswer)
        response.status(200).json(saveAnswer)
    } else {
        response.status(400).json(errors)
    }
})