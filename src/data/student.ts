import axios, { AxiosError, AxiosInstance } from "axios";
import config from "../config/config";

const StudentApi = (() => {
    const server: AxiosInstance = axios.create({
        baseURL: config.server+'/students',
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

    return {
        Fetch
    };
})();

export default StudentApi;