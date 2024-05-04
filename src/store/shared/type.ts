export type ServerResponse = {
    status: string;
    message: string;
    data?: object[] | object | null;
    error?: object | string | unknown;
}