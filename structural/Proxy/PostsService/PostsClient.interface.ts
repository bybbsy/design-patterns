export type IPostsClientResponse = any[] | never;

export interface IPostsClient {
    fetchPosts: () => Promise<IPostsClientResponse>
}