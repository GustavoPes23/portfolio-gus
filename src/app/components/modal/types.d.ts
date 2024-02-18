import { SubItems } from "@/app/constants/types";

interface ModalProps {
    open: boolean;
    readonly setOpen: Dispatch<SetStateAction<boolean>>;
    readonly subItems: SubItems[];
    readonly usingMarginModal: boolean
}

export type {
    ModalProps
}