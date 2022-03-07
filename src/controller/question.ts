import { getManager } from "typeorm";
import { Question } from "../entity/Question";
export class questionController {

    async save(question: Question) {
        const questionSave = await getManager().save(question);
        return questionSave;
    }
    async listQuestions() {
        const questions = await getManager().find(Question);
        return questions;
    }
    async getQuestion(id: number) {
        const question = await getManager().findOne(Question, id);
        return question;
    }
}