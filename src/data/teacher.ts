import axios, { AxiosError, AxiosInstance } from "axios";
import config from "../config/config";
import { TeacherType } from "../store/teacher/types";

const TeacherApi = (() => {
    const server: AxiosInstance = axios.create({
        baseURL: config.server+'/teachers',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    async function Fetch() {
        try {
            return await server.get('/');
        } catch (error) {
            return error as AxiosError;
        }
    }
    
    async function Create(data: TeacherType) {
        try {
            return await server.post('/', data);
        } catch (error) {
            return error as AxiosError;
        }
    }

    return {
        Fetch,
        Create
    };
})();

export default TeacherApi;