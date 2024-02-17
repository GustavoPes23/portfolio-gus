import { FC, useState, Children } from "react";

import Item from "./item";

import ImageLoading from "../loading/imageLoading";

import type { ItemsProps } from "./types";

import type { ItemData } from "@/app/constants/types";

import "./styles.css";

const getFilter = (filter: string, items?: ItemData[]): null | ItemData[] => {
    if (!items) {
        return null;
    }

    if (!filter) {
        return items;
    }

    return items.filter((item) => item.tag.code === filter);
};

const Index: FC<ItemsProps> = ({
    items,
    filter,
    loading
}) => {    
    const filtered: ItemData[] | null = getFilter(filter, items);

    return (
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 xl:gap-x-8">
                {loading
                    ? Children.toArray(
                        [1, 2, 3, 4, 5, 6].map((_) => (
                            <ImageLoading />
                        ))
                    )
                    : filtered && filtered.map(({ id, name, image, tag, subItems }: ItemData) => (
                        <Item
                            key={id}
                            id={id}
                            name={name}
                            image={image}
                            tag={tag}
                            subItems={subItems}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Index;