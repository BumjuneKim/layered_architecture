class PostRepository {
    constructor(PostsModel) {
        this.postsModel = PostsModel
    }
    findAllPost = async () => {
        const posts = await this.postsModel.findAll();
        return posts;
    }

    createPost = async (nickname, password, title, content) => {
        const createPostData = await this.postsModel.create({ nickname, password, title, content });
        return createPostData;
    }
}

module.exports = PostRepository;
