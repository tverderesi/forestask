/// <reference types="react-scripts" />

declare namespace NodeJS {
    interface ProcessEnv {
       //types of envs
        NODE_ENV: 'development' | 'production' | 'test';
        REACT_APP_PUBLIC_URL: string;
        REACT_APP_FAKE_SERVER: string;
        SERVER_URI: 'http://localhost:4000'
    }
}
