import { getManager, getRepository } from "typeorm";
import { Answer } from "../entity/Answer";
import { Employee } from "../entity/Employee";
import { Question } from "../entity/Question";


export class answerCtrl {
    async save(answer: Answer) {
        const verifyEmployeeId = await getManager().findOne(Employee, answer.employeeId)
        const verifyQuestionId = await getManager().findOne(Question, answer.questionId)

        if (verifyEmployeeId && verifyQuestionId) {
            const saveAnswer = await getManager().save(answer)
            return saveAnswer
        } else if (verifyEmployeeId && verifyQuestionId == null) {
            return 'Question id does not exist'
        } else if (verifyEmployeeId == null && verifyQuestionId) {
            return 'Employee id does not exist'
        } else {
            return 'Question id and Employee id do not exist'
        }
    }
}