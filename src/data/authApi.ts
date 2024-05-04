import axios, { AxiosError, AxiosInstance } from "axios";
import config from "../config/config";
import { LoginType } from "../store/auth/types";

const AuthApi = (() => {
    const server: AxiosInstance = axios.create({
        baseURL: config.server,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    async function Login(data: LoginType) {
        try {
            return await server.post("/login", data);
        } catch (error) {
            return error as AxiosError;
        }
    }

    return {
        Login
    };
})();

export default AuthApi;