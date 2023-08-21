import { RedisClientType, createClient } from 'redis';
import { Orm, OrmResponse } from './types';

export class RedisClient implements Orm {
    private client: RedisClientType;

    constructor() {
        this.client = createClient({
            url: 'redis://127.0.0.1:6379'
        });
        this.client.connect();
        this.client.on('connect', () => console.log("Connected to Redis"));
        this.client.on('error', (err) => console.log('Redis Cluster Error', err));
    }

    async getItem(key: string): Promise<OrmResponse> {
        return await this.client.get(key);
    };

    async setItem(key: string, value: string): Promise<OrmResponse> {
        return await this.client.set(key, value);
    };
} 