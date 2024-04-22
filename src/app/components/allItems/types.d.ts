import { ItemData } from "@/app/constants/types"

interface ItemsProps {
    readonly items?: ItemData[];
    readonly filter: string;
    readonly loading: boolean;
    setItems: (items: ItemData[]) => void
}

export type {
    ItemsProps
}