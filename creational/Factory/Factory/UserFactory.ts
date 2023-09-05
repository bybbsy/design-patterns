import { Admin } from "../User/Admin";
import { Applicant } from "../User/Applicant";
import { Guest } from "../User/Guest";
import { UserType } from "../types/types";

export class UserFactory {
    static createAdmin() {
        return new Admin();
    }
    static createApplicant() {
        return new Applicant();
    }
    static createGuest() {
        return new Guest();
    }
    // #DONE createAdmin
}