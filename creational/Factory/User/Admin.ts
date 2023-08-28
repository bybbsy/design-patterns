import {User} from './User.interface';

export class Admin implements User {
    permissions: string[];

    constructor() {
        this.permissions = ['read', 'write', 'delete'];
    }
}