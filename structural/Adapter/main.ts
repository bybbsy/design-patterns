import { CsvClient } from './clients/csvClient';
import { RedisClient } from './clients/redisClient';
import { join } from 'path';

async function main() {
    // const redisClient = new RedisClient();
    // await redisClient.setItem('hey', '0001000');
    // const data = await redisClient.getItem('hey');
    // console.log(data);

    const csvFilePath = join(__dirname, 'data.csv');    
    const csvClient = new CsvClient(csvFilePath);

    const item = await csvClient.getItem('a');
    await csvClient.setItem('a', '100');
    const itemTwo = await csvClient.getItem('z');
    console.log(item, itemTwo);
}

main();