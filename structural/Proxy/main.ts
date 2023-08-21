import { CsvManagerProxy } from "./CsvManagerProxy/CsvManagerProxy";
import { join } from 'path';

async function main() {
    const filename = join(__dirname, 'data.csv')
    const csvProxy = new CsvManagerProxy(filename)
    const a = await csvProxy.getItem('a');
    // const a = await csvProxy.getItem('{a}');
    console.log(a);
}

main();