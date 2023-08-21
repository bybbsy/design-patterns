const fs = require('fs/promises');
const { parse } = require("csv-parse")

import { Orm, OrmResponse } from "./types";

export class CsvClient implements Orm {
    private filePath: string;
    
    constructor(filePath: string) {
        this.filePath = filePath;
    }

    async getItem(key: string): Promise<OrmResponse> {
        const data = await fs.readFile(this.filePath);
        const result = parse(data, {bom: true});
        
        const item = await result.find((item: string[]) => item[0] === key);
        
        return item ? item[1] : null;
    };

    async setItem(key: string, value: string): Promise<OrmResponse> {
        const string = `\n${key},${value}`;
        await fs.appendFile(this.filePath, string, 'utf8');
        return string;
    };
} 