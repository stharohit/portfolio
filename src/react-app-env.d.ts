/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production";
    PUBLIC_URL: string;
    REACT_APP_SMPT_API_KEY: Enums;
    REACT_APP_SMPT_SECRET_KEY: Enums;
  }
}
interface Window {
  Stripe: any;
}

declare module "*.module.less" {
  const classes: { [key: string]: string };
  export default classes;
}
