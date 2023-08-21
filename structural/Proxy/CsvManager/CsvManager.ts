const fs = require('fs/promises');
const { parse } = require("csv-parse")
import { ICsvManager } from "./CsvManager.interface";

export class CsvManager implements ICsvManager {
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
    }

    async getItem(key: string) {
        const data = await fs.readFile(this.filename);
        const result = parse(data, {bom: true});
        
        const item = await result.find((item: string[]) => item[0] === key);
        
        return item ? item[1] : null;
    }

    async setItem(key: string, value: string) {
        const string = `\n${key},${value}`;
        await fs.appendFile(this.filename, string, 'utf8');
        return string;
    }
}