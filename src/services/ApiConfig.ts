import { ENV_DEVELOPMENT, URI_PRODUCTION } from "@/app/constants/Env";

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
        return process.env.uri_api_prod || URI_PRODUCTION;
    }
}