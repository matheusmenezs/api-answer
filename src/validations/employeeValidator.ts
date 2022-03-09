import { check } from "express-validator";
import { getManager } from "typeorm";
import { Employee } from "../entity/Employee";

export const employeeValidator = [
    check("name").not().isEmpty().withMessage("Name is required"),
    check("password").isLength({ min: 6 }).withMessage("Password must be greater than or equal to 6"),
    check("role")
        .custom(async role => {
            if (role != "admin" && role != "employee") {
                return Promise.reject("Enter a valid enum type: admin or employee");
            }
        }),
    check("email").isEmail().withMessage("Enter a valid email address")
        .custom(async email => {
            const emailVerify = await getManager().findOne(Employee, { where: {email} });
            if (emailVerify) {
                return Promise.reject("This email is already in use");
            }
        })
]