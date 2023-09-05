import {User} from './User.interface';
import {readFile} from 'fs/promises';

export class Guest implements User {
    permissions: string[];

    constructor() {
        this.permissions = ['read'];
    }

    async read(filepath: string): Promise<any> {
        const raw = await readFile(filepath, { encoding: 'utf-8' })
        return raw;
    }
    
    async write(filepath: string, data: string) {
        throw Error('User does not have permission to write file');
    }
    
    async delete(filepath: string) {
        throw Error('User does not have permission to delete file');        
    }
}