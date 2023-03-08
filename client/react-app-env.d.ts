/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    //types of envs
    REACT_APP_SERVER_URI: string;
    REACT_APP_NODE_ENV: "production";
    REACT_APP_PUBLIC_URL: string;
  }
}
