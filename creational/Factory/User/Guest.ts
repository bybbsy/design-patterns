import {User} from './User.interface';

export class Guest implements User {
    permissions: string[];

    constructor() {
        this.permissions = ['read'];
    }
}