import { v4 } from "uuid";

import type { ModalProps } from "../components/modal/types";

interface FiltersData {
    readonly code: string,
    readonly description: string;
    total?: number;
};

interface SubItems {
    readonly link: string;
    readonly width?: string;
}

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
    readonly subItems: SubItems[];
    readonly link?: string
}

export type {
    FiltersData,
    ItemData,
    SubItems
};