import {User} from './User.interface';
import {readFile, appendFile, unlink} from 'fs/promises';

export class Applicant implements User {
    permissions: string[];

    constructor() {
        this.permissions = ['read', 'write'];
    }

    async read(filepath: string): Promise<any> {
        const raw = await readFile(filepath, { encoding: 'utf-8' })
        return raw;
    }
    
    async write(filepath: string, data: string) {
        return await appendFile(filepath, data);
    }
    
    async delete(filepath: string) {
        throw Error('User does not have permission to delete file');        
    }
}