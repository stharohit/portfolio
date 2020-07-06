/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production";
    PUBLIC_URL: string;
    REACT_APP_BUNDLE_VISUALIZE: number;
  }
}
interface Window {
  Stripe: any;
}

declare module "*.module.less" {
  const classes: { [key: string]: string };
  export default classes;
}
