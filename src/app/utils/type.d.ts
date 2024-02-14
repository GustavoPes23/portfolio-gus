import type { DoPostResponse } from '@/services/types';

interface UserData {
    readonly user: string,
    readonly pass: string
};

interface LoginAuth extends DoPostResponse {
    readonly token?: string;
}

export type { UserData, LoginAuth };