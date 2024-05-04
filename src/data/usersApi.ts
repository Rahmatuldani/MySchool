import axios, { AxiosError, AxiosInstance } from "axios";
import config from "../config/config";

const UserApi = (() => {
    const server: AxiosInstance = axios.create({
        baseURL: config.server+'/users',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    async function Find() {
        try {
            return await server.get('/');
        } catch (error) {
            return error as AxiosError;
        }
    }

    return {
        Find,
    };
})();

export default UserApi;