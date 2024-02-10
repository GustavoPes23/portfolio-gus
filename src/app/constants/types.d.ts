import { v4 } from "uuid";

interface FiltersData {
    readonly id: string,
    readonly name: string;
    total: number;
};

interface ItemData extends ModalProps {
    readonly id: v4,
    readonly name: string,
    readonly href: string,
    readonly imageSrc: string | StaticImageData,
    readonly imageAlt: string,
    readonly tag: string,
    readonly link?: string,
}

export type {
    FiltersData,
    ItemData
};