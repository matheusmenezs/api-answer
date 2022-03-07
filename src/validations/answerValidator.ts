import { check } from "express-validator";
import { getManager } from "typeorm";
import { Employee } from "../entity/Employee";
import { Question } from "../entity/Question";

export const answerValidator = [
    check("description").not().isEmpty().withMessage("Description is required"),
    check("employeeId")
        .custom(async id => {
            const employeeVerify = await getManager().findOne(Employee, id);
            if (!employeeVerify) {
                return Promise.reject("There is no employee with this ID");
            }
        }),
    check("questionId")
        .custom(async id => {
            const questionVerify = await getManager().findOne(Question, id);
            if (!questionVerify) {
                return Promise.reject("There is no question with this ID");
            }
        })

]