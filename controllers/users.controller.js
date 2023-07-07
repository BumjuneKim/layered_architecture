const UserService = require('../services/users.service');

class UsersController {
    userService = new UserService(); // Post 서비스를 클래스를 컨트롤러 클래스의 멤버 변수로 할당합니다.

    postLogin= async (req, res, next) => {
        const { nickname, password } = req.body;
        const token = await this.userService.doLogin(nickname, password);
        res.cookie('set-Cookie', token)
        res.status(200).json( { message: '로그인 성공' })
    }
}

module.exports = UsersController;
