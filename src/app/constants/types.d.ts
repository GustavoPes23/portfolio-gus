import { v4 } from "uuid";

import type { ModalProps } from "../components/modal/types";

interface FiltersData {
    readonly id: string,
    readonly name: string;
    total?: number;
};

interface ItemData {
    readonly id: v4,
    readonly name: string,
    readonly href: string,
    readonly image: {
        readonly imageSrc: string | StaticImageData,
        readonly imageAlt: string,
    },
    readonly tag: string,
    readonly link?: string,
    open?: boolean;
    setOpen?: Dispatch<SetStateAction<boolean>>
}

export type {
    FiltersData,
    ItemData
};