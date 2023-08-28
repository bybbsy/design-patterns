import { Admin } from "../User/Admin";
import { Applicant } from "../User/Applicant";
import { Guest } from "../User/Guest";
import { UserType } from "../types/types";

export class UserFactory {
    static create(userType: UserType) {
        if (userType === 'admin') {
            return new Admin();
        }
        else if (userType === 'applicant') {
            return new Applicant();
        }
        else if (userType === 'guest') {
            return new Guest();
        }
        throw Error('Specified user type does not exist')
    }
}