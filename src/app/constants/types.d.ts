import { v4 } from "uuid";

import type { ModalProps } from "../components/modal/types";

interface FiltersData {
    readonly code: string,
    readonly description: string;
    total?: number;
};

interface ItemData {
    readonly id: v4,
    readonly name: string,
    readonly image: {
        readonly src: string | StaticImageData,
        readonly alt: string,
    },
    readonly tag: {
        readonly id: string,
        readonly code: string,
        readonly description: string
    },
    readonly link?: string,
    open?: boolean;
    setOpen?: Dispatch<SetStateAction<boolean>>
}

export type {
    FiltersData,
    ItemData
};