const config = {
    title: import.meta.env.VITE_APP_NAME ?? 'MySchool',
    developer: import.meta.env.VITE_APP_DEVELOPER ?? 'MySchool',
    server: import.meta.env.VITE_APP_SERVER_URL ?? 'http://localhost:5000/api/v1'
};

export default config;