import { UserFactory } from "./Factory/UserFactory";
import { FileManager } from "./FileManager/FileManager";
import { join } from 'path';

async function main() {
    const admin = UserFactory.create('admin');
    const applicant = UserFactory.create('applicant');
    const guest = UserFactory.create('guest');
    
    // const filePath = join(__dirname, 'fileToDelete.txt')
    
    const filePath = join(__dirname, 'file.txt')
    const fileManager = new FileManager(filePath);
    const data = await fileManager.read(applicant);
    
    await fileManager.write('\nzxcxz', applicant)
    console.log(data);

    // await fileManager.delete(admin)
}

main()