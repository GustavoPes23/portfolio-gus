import { ENV_DEVELOPMENT, URI_DEVELOPMENT } from "@/app/constants/Env";

export default class ApiConfig {
    private env = ENV_DEVELOPMENT;

    constructor() {
        this.setEnv();
    }

    private setEnv(): void {
        this.env = process.env.NODE_ENV;
    }

    private getEnv(): string {
        return process.env.NODE_ENV;
    }

    private isEnvDev(): boolean {
        return this.getEnv() === ENV_DEVELOPMENT;
    }

    public getBaseUrl(): string {
        // if (this.isEnvDev()) {
        //     return process.env.REACT_APP_API_URI_DEV || URI_DEVELOPMENT;
        // }


        return process.env.REACT_APP_API_URI_PROD || "https://portfolio-guna-api.vercel.app/";
    }
}