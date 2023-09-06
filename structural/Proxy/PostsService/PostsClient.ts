import { IPostsClient } from "./PostsClient.interface";
import fetch from 'node-fetch';

export class PostsService implements IPostsClient {
    constructor() {}

    async fetchPosts(): Promise<any[] | never> {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {});
            const data = await response.json();          
            return data;
        } catch (e) {
           throw e;
        }
    }
}