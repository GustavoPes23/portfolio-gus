"use server"

import { cache } from 'react'

import Service from "@/services/Service";

import { AxiosError } from "axios";

import type { UserData } from './type';

import type { LoginAuth } from './type';

import type { DoPostResponse } from '@/services/types';

export const loginAuth = cache(async (): Promise<LoginAuth | void> => {
    try {

        const user: string | undefined = process.env.user;
        const pass: string | undefined = process.env.pass;

        if (!user || !pass) {
            return;
        }

        const data: UserData = { user, pass };

        const service = new Service();
        const response: DoPostResponse = await service.doPost("user/auth", data);

        if (!response || !response?.success) {
            throw new Error(response?.message || "Failed login");
        }

        return response;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw error;
        } else {
            const axiosError = error as AxiosError;
            throw new Error(axiosError.message || "Unknown error occurred");
        }
    }
});