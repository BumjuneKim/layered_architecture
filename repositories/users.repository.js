const { Users } = require('../models');

class UserRepository {
    findOneByNickname = async (nickname) => {
        return await Users.findOne({
            where: { nickname: nickname }
        })
    }
}

module.exports = UserRepository;
