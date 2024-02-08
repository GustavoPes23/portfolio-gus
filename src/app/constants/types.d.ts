interface FiltersData {
    readonly id: string,
    readonly name: string;
    total: number;
};

interface ItemData {
    readonly id: number,
    readonly name: string,
    readonly href: string,
    readonly imageSrc: string,
    readonly imageAlt: string,
    readonly tag: string
}

export type {
    FiltersData,
    ItemData
};