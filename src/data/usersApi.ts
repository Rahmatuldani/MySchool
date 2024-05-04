import axios, { AxiosError, AxiosInstance } from "axios";
import config from "../config/config";
import { UserType } from "../store/user/types";

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
    
    async function Create(data: UserType) {
        try {
            return await server.post('/', data);
        } catch (error) {
            return error as AxiosError;
        }
    }
    
    async function Delete(id: string) {
        try {
            return await server.delete(`/${id}`);
        } catch (error) {
            return error as AxiosError;
        }
    }

    return {
        Find,
        Create,
        Delete
    };
})();

export default UserApi;