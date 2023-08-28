import {User} from './User.interface';

export class Applicant implements User {
    permissions: string[];

    constructor() {
        this.permissions = ['read', 'write'];
    }
}