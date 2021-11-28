import { ResponseAuth, SignInDto, SignUpDto } from './types';
import axios from "axios";



const instance = axios.create({
    baseURL: "http://localhost:7777/"
})


export const UserApi = {
    async register(dto: SignInDto): Promise<ResponseAuth> {
        const { data } = await instance.post<SignInDto, { data: ResponseAuth }>('auth/register', dto);
        return data
    },

    async login(dto: SignUpDto): Promise<ResponseAuth> {
        const { data } = await instance.post<SignUpDto, { data: ResponseAuth }>('auth/login', dto);
        return data
    },

    async getMe(token: string) {
        const { data } = await instance.get<ResponseAuth>('users/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return data;
    }
}