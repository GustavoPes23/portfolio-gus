import { SubItems } from "@/app/constants/types";

interface ModalProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    subItems: SubItems[];
}

export type {
    ModalProps
}