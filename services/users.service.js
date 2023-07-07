const UserRepository = require('../repositories/users.repository');

class PostService {
    userRepository = new UserRepository();

    doLogin = async (nickname, password) => {
        // 저장소(Repository)에게 데이터를 요청합니다.
        const userByNickname = await this.userRepository.findOneByNickname();
        if (!userByNickname || userByNickname.password != password) {
            throw new Error('인증 오류')
        }

        // ....
        /// 로그인 비즈니스 로직 구현
    }
}

module.exports = PostService;
