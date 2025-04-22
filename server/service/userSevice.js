// import { findOne, create, findById, find } from '../models/user-model';
import { hash, compare } from 'bcryptjs';
import { v4 } from 'uuid';
import { User } from '../models/models.js';
import tokenService from './tokenService.js';
import UserDto from '../dtos/userDto.js';
import { BadRequest, UnauthorizedError } from '../exceptions/apiError.js';
import { log } from 'console';


const { generateTokens, saveToken, removeToken, validateRefreshToken, findToken } = tokenService;
class userService {
    async registration(login, password) {
        const candidate = await User.findOne({ where: { login } });
        if (candidate) {
            throw BadRequest(`Пользователь с таким логином уже существует`)
        }
        const hashPassword = await hash(password, 3);

        const user = await User.create({login, password: hashPassword})

        const userDto = new UserDto(user); // id, email, isActivated
        const tokens = generateTokens({...userDto});
        await saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto}
    }


    async login(login, password) {
        console.log('User модель:')
        console.log('login',login);
        
        const user = await User.findOne({ where: { login } });
        if (!user) {
            throw BadRequest('Пользователь с таким email не найден')
        }
        const isPassEquals = await compare(password, user.password);
        if (!isPassEquals) {
            throw BadRequest('Неверный пароль');
        }
        const userDto = new UserDto(user);
        const tokens = generateTokens({...userDto});
        console.log(user);
        console.log(userDto)
        await saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: userDto}
    }

    async logout(refreshToken) {
        const token = await removeToken(refreshToken);
        return token;
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw UnauthorizedError();
        }
        const userData = validateRefreshToken(refreshToken);
        const tokenFromDb = await findToken(refreshToken);
        if (!userData || !tokenFromDb) {
            throw UnauthorizedError();
        }
        const user = await User.findByPk(userData.id);
        const userDto = new UserDto(user);
        const tokens = generateTokens({...userDto});

        await saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: userDto}
    }

    async getAllUsers() {
        const users = await User.findAll();
        return users;
    }
}

export default new userService();