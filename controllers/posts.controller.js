const PostService = require('../services/posts.service');

class PostsController {
    postService = new PostService();

    getPosts = async (req, res, next) => {
        const posts = await this.postService.findAllPost();

        res.status(200).json({ data: posts });
    };

    getPostById = async (req, res, next) => {
        const { postId } = req.params;
        const post = await this.postService.findPostById(postId);

        res.status(200).json({ data: post });
    };

    createPost = async (req, res, next) => {
        try {
            const { nickname, password, title, content } = req.body;

            if (!nickname || !password || !title) throw new Error('InvalidParamsError');

            const createPostData = await this.postService.createPost(
                nickname,
                password,
                title,
                content
            );

            res.status(201).json({ data: createPostData });
        } catch (error) {
            res.status(400).json({ errorMessage: error.message });
        }
    };

    updatePost = async (req, res, next) => {
        const { postId } = req.params;
        const { password, title, content } = req.body;

        const updatePost = await this.postService.updatePost(
            postId,
            password,
            title,
            content
        );

        res.status(200).json({ data: updatePost });
    };

    deletePost = async (req, res, next) => {
        const { postId } = req.params;
        const { password } = req.body;

        const deletePost = await this.postService.deletePost(postId, password);

        res.status(200).json({ data: deletePost });
    };
}

module.exports = PostsController;
