export type ServerResponse = {
    status: string;
    message: string;
    data?: object[] | object | null;
    error?: object | string | unknown;
    role?: string;
}

export const TeacherFields: string[] = [
    'Bahasa Indonesia',
    'Bahasa Inggris',
    'Fisika',
    'Kimia',
    'Biologi',
    'Matematika'
];