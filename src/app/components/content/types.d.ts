import { FiltersData } from "@/app/constants/types";
import { LoginAuth } from "@/app/utils/type";

interface FilterProps {
    readonly filters?: FiltersData[];
    readonly filter: string;
    setFilter: (filter: string) => void;
    readonly loading: boolean
};

interface ContentProps {
    user: LoginAuth
};

interface UniqueTags  { 
    [key: string]: boolean 
}

export type { FilterProps, ContentProps, UniqueTags };