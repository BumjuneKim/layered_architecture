const PostService = require('../services/posts.service');

// Post의 컨트롤러(Controller)역할을 하는 클래스
class PostsController {
    postService = new PostService(); // Post 서비스를 클래스를 컨트롤러 클래스의 멤버 변수로 할당합니다.

    getPosts = async (req, res, next) => {
        // 서비스 계층에 구현된 findAllPost 로직을 실행합니다.
        const posts = await this.postService.findAllPost();

        res.status(200).json({ data: posts })
    }

    createPost = async (req, res, next) => {
        const { nickname, password, title, content } = req.body;

        // 서비스 계층에 구현된 createPost 로직을 실행합니다.
        const createPostData = await this.postService.createPost(nickname, password, title, content);

        res.status(201).json({ data: createPostData });
    }
}

module.exports = PostsController;
