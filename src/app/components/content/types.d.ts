import { FiltersData } from "@/app/constants/types";

interface FilterProps {
    readonly filters: FiltersData[];
    readonly filter: string;
    setFilter: (filter: string) => void
}

export type {
    FilterProps
};