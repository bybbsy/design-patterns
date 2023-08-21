import { CsvManager } from "../CsvManager/CsvManager";
import { ICsvManager } from "../CsvManager/CsvManager.interface";

export class CsvManagerProxy implements ICsvManager {
    private csvManager: CsvManager;

    constructor(filename: string) {
        this.csvManager = new CsvManager(filename);
    }

    async getItem(key: string) {
        if(!this.validateKey(key)) {
            return `Invalid key: ${key}`;
        }

        const response = await this.csvManager.getItem(key);
        return response;
    }

    async setItem(key: string, value: string) {
        if(!this.validateKey(key)) {
            return `Invalid key: ${key}`;
        }

        if(!this.validateValue(value)) {
            return `Invalid value: ${value}`;
        }

        const response = await this.csvManager.setItem(key, value);
        return response;
    }

    private validateKey(key: string) {
        return this.isString(key) && !this.hasBrackets(key)
    }

    private isString(key: string) {
        return typeof key === 'string' && key.length > 0;       
    }

    private validateValue(value: string) {
        return this.isString(value);
    }

    private hasBrackets(value: string) {
        return /\{|\}/g.test(value)
    }
}