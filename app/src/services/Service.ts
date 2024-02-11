import ApiConfig from "./ApiConfig";

import axios from "axios";

export default class Service {
    private instanceApiConfig: ApiConfig | null = null

    constructor() {
        this.setInstanceApiConfig();
    }

    private setInstanceApiConfig(): void {
        this.instanceApiConfig = new ApiConfig();
    }

    private getInstanceApiConfig(): ApiConfig | null {
        return this.instanceApiConfig;
    }

    private getBaseUrl(): string {
        const apiConfig = this.getInstanceApiConfig();
        return apiConfig!.getBaseUrl();
    }

    async doGet(url: string, data?: string) {
        const baseUrl = this.getBaseUrl();
        let path = `${baseUrl}${url}`;

        data && (path += `?${data}`);

        const response = await axios({
            method: "get",
            url: path,
        });

        console.log(path)

        return await response.data;
    }
}