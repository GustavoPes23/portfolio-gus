import { FC, memo, useEffect } from "react";



import "./styles.css";

import type { ItemsProps } from "./types";
import Item from "./item";

const products = [
    {
        id: 1,
        name: 'Sites',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Sites in black.",
    },
    {
        id: 2,
        name: 'Sites',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Sites in black.",
    },
    {
        id: 3,
        name: 'Brand Design',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Brand Design in black.",
    },
    {
        id: 4,
        name: 'Brand Design',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Brand Design in black.",
    },
    {
        id: 5,
        name: 'Logo',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Logo in black.",
    },
    {
        id: 6,
        name: 'Logo',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Logo in black.",
    },
    // More products...
]

const index: FC<ItemsProps> = ({ filter }) => {
    const filtered = filter ? products.filter((product) => product.name === filter) : products;

    return (
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 xl:gap-x-8">
                {filtered.map((product) => (
                    <Item
                        key={product.id}
                        {...product}
                    />
                ))}
            </div>
        </div>
    )
}

export default index;