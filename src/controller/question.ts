import { getManager } from "typeorm";
import { Question } from "../entity/Question";
export class questionController {

    async save(question: Question) {
        const questionSave = await getManager().save(question);
        return questionSave;
    }
    async listQuestions() {
        const questions = await getManager().connection.query('select * from question');
        return questions;
    }
    async getQuestion(id: string) {
        const question = await getManager().findOne(Question, id);
        return question;
    }
}