import { getManager } from "typeorm";
import { Answer } from "../entity/Answer";

export class answerCtrl {
    async save(answer: Answer) {
        const saveAnswer = await getManager().save(answer);
        return saveAnswer;
    }
}