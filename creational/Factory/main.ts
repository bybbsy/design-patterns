import { UserFactory } from "./Factory/UserFactory";
import { join } from 'path';

async function main() {
    const admin = UserFactory.createAdmin();
    const applicant = UserFactory.createApplicant();
    const guest = UserFactory.createGuest();
        
    const filepath = join(__dirname, 'file.txt')
    admin.write(filepath, '\nzxczx');
    guest.write(filepath, '\nzxczx');

    applicant.delete(filepath);
}

main()