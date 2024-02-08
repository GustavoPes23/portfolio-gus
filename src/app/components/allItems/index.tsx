import { FC } from "react";

import Item from "./item";

import type { ItemsProps } from "./types";

import "./styles.css";

const Index: FC<ItemsProps> = ({ items, filter }) => {
    const filtered = filter ? items.filter((item) => item.name === filter) : items;

    return (
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 xl:gap-x-8">
                {filtered.map((item) => (
                    <Item
                        key={item.id}
                        {...item}
                    />
                ))}
            </div>
        </div>
    )
}

export default Index;