import ApiConfig from "./ApiConfig";

import axios from "axios";
import { DoPostResponse } from "./types";

import { CacheRevalidate } from "@/app/constants/CacheRevalidate";

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

    async doGet(url: string, token: string, query?: string) {
        const baseUrl = this.getBaseUrl();
        let path = `${baseUrl}/api/${url}`;

        query && (path += `?${query}`);

        try {
            const response = await axios.get(path, {
                headers: {
                    'Authorization': token
                }
            });

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Axios Error:', error.message);
                throw new Error('Network error occurred');
            } else {
                console.error('Unexpected Error:', error);
                throw new Error('An unexpected error occurred');
            }
        }
    }

    async doPost(url: string, data: object): Promise<DoPostResponse> {
        const baseUrl = this.getBaseUrl();
        const path = `${baseUrl}/api/${url}`;

        const response = await fetch(path, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data),
            next: { 
                revalidate: CacheRevalidate
            }
        });
        
        return await response.json();
    }
}