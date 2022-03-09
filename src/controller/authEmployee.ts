import { getManager } from "typeorm";
import { Employee } from "../entity/Employee";

class authController {
    async findEmployee(email: string) {
        const employee = await getManager().findOne(Employee, { where: { email } });
        return employee;
    }
}
export default new authController();