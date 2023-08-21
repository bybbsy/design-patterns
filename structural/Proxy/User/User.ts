import { IUser } from "./User.interface";

export class User implements IUser {
    name: string;
    birthDate: Date;
    age: number;

    constructor(name: string, birthDate: Date, age: number) {
        this.name = name;
        this.birthDate = this.birthDate;
        this.age = age;
    }
}