import { RedisClientType, createClient } from 'redis';
import { IPostsClient } from '../PostsService/PostsClient.interface';
import { PostsService } from '../PostsService/PostsClient';

export class PostsServiceProxy implements IPostsClient {
    private service: PostsService;
    private redis: RedisClientType;

    constructor() {
        this.redis = createClient({
            url: 'redis://127.0.0.1:6379'
        });
        this.redis.connect();
        this.redis.on('connect', () => console.log("Connected to Redis"));
        this.redis.on('error', (err) => console.log('Redis Cluster Error', err));

        this.service = new PostsService();
    }

    async fetchPosts() {
        let cache = await this.redis.get('posts');

        console.log('[CACHE]>', Boolean(cache))
        if(!cache) {
            let data = await this.service.fetchPosts();
            console.log(`[FETCHED]> itemc count: ${data.length}`);
            await this.redis.set('posts', JSON.stringify(data), {'EX': 10});
            return data;
        } else {
            let data = JSON.parse(cache);
            return data;
        }
    }
}