
import { cache } from 'react'

import Service from "@/services/Service";

import { AxiosError } from "axios";

import { ItemData } from '@/app/constants/types'

export const getItems = cache(async (token: string): Promise<ItemData[]> => {
    try {
        const service = new Service();
        const response = await service.doGet("item", token);

        if (!response || !response?.success) {
            throw new Error(response?.message || "Failed get user");
        }

        return await response.result;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw error;
        } else {
            const axiosError = error as AxiosError;
            throw new Error(axiosError.message || "Unknown error occurred");
        }
    }
});