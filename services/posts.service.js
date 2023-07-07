const PostRepository = require('../repositories/posts.repository');
const { Posts } = require('../models')

class PostService {
    postRepository = new PostRepository(Posts);

    findAllPost = async () => {
        const allPost = await this.postRepository.findAllPost();

        allPost.sort((a, b) => {
            return b.createdAt - a.createdAt;
        });

        return allPost.map((post) => {
            return {
                postId: post.postId,
                nickname: post.nickname,
                title: post.title,
                createdAt: post.createdAt,
                updatedAt: post.updatedAt,
            };
        });
    };

    findPostById = async (postId) => {
        const findPost = await this.postRepository.findPostById(postId);

        return {
            postId: findPost.postId,
            nickname: findPost.nickname,
            title: findPost.title,
            content: findPost.content,
            createdAt: findPost.createdAt,
            updatedAt: findPost.updatedAt,
        };
    };

    createPost = async (nickname, password, title, content) => {
        const createPostData = await this.postRepository.createPost(
            nickname,
            password,
            title,
            content
        );

        return {
            postId: createPostData.postId,
            nickname: createPostData.nickname,
            title: createPostData.title,
            content: createPostData.content,
            createdAt: createPostData.createdAt,
            updatedAt: createPostData.updatedAt,
        };
    };

    updatePost = async (postId, password, title, content) => {
        const findPost = await this.postRepository.findPostById(postId);
        if (!findPost) throw new Error("Post doesn't exist");

        await this.postRepository.updatePost(postId, password, title, content);

        const updatePost = await this.postRepository.findPostById(postId);

        return {
            postId: updatePost.postId,
            nickname: updatePost.nickname,
            title: updatePost.title,
            content: updatePost.content,
            createdAt: updatePost.createdAt,
            updatedAt: updatePost.updatedAt,
        };
    };

    deletePost = async (postId, password) => {
        const findPost = await this.postRepository.findPostById(postId);
        if (!findPost) throw new Error("Post doesn't exist");

        await this.postRepository.deletePost(postId, password);

        return {
            postId: findPost.postId,
            nickname: findPost.nickname,
            title: findPost.title,
            content: findPost.content,
            createdAt: findPost.createdAt,
            updatedAt: findPost.updatedAt,
        };
    };
}

module.exports = PostService;
