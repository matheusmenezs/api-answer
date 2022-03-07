import { check } from "express-validator";
import { getManager } from "typeorm";
import { Employee } from "../entity/Employee";

export const questionValidator = [
    check("description").not().isEmpty().withMessage("Description is required"),
    check("employeeId")
        .custom(async id => {
            const employeeVerify = await getManager().findOne(Employee, id);
            if (!employeeVerify) {
                return Promise.reject("There is no employee with this ID");
            }
        })
]