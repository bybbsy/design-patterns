import { PostsServiceProxy } from './PostsServiceProxy/PostServiceProxy';

async function main() {
    const csvProxy = new PostsServiceProxy()
    const a = await csvProxy.fetchPosts();
}

main();