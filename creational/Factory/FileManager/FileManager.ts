import { User } from "../User/User.interface";
const fs = require('fs/promises');

export class FileManager {
    private filePath: string;

    constructor(filePath: string) {
        console.log(filePath);
        
        this.filePath = filePath;
    }

    async read(user: User) {
        if (user.permissions.includes('read')) {
            const raw = await fs.readFile(this.filePath, {encoding: 'utf-8'})
            
            return raw;
        }
        throw Error('User does not have permission to read file');
    }

    async write(data: string, user: User) {
        if (user.permissions.includes('write')) {
            return await fs.appendFile(this.filePath, data);
        }
        throw Error('User does not have permission to write file');
    }

    async delete(user: User) {
        if (user.permissions.includes('delete')) {
            return await fs.unlink(this.filePath);
        }
        throw Error('User does not have permission to delete file');
    }
}