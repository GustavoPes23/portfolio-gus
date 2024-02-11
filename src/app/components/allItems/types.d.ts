import { ItemData } from "@/app/constants/types"

interface ItemsProps {
    readonly items: ItemData[]
    readonly filter: string
}

export type {
    ItemsProps
}