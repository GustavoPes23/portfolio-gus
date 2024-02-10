import { v4 as uuidv4 } from 'uuid'; 

import { ID_TAG_LOGO, ID_TAG_BRAND_DESIGN, ID_TAG_SITE } from "./Tags";

import { RevallaRe, DagostinhoDoces, Tavares } from './Images';

import type { ItemData } from "./types";

export const Items: ItemData[] = [
    {
        id: uuidv4,
        name: 'Sites',
        href: '#',
        imageSrc: RevallaRe,
        imageAlt: "Front of men's Sites in black.",
        tag: ID_TAG_SITE
    },
    {
        id: uuidv4,
        name: 'Sites',
        href: '#',
        imageSrc: RevallaRe,
        imageAlt: "Front of men's Sites in black.",
        tag: ID_TAG_SITE
    },
    {
        id: uuidv4,
        name: 'Brand Design',
        href: '#',
        imageSrc: DagostinhoDoces,
        imageAlt: "Dá Gostinho Doces - Identidade Visual",
        tag: ID_TAG_BRAND_DESIGN,
        link: "https://www.behance.net/gallery/179322827/Redesign-RevellaRe"
    },
    {
        id: uuidv4,
        name: 'Brand Design',
        href: '#',
        imageSrc: RevallaRe,
        imageAlt: "Desenvolvimento do redesign para RevellaRe by Thailla. Trabalho realizado na P9 Digital.",
        tag: ID_TAG_BRAND_DESIGN,
        link: "https://www.behance.net/gallery/179322827/Redesign-RevellaRe"
    },
    {
        id: uuidv4,
        name: 'Brand Design',
        href: '#',
        imageSrc: Tavares,
        imageAlt: "Desenvolvimento do logo e identidade visual para Tavares Simões Advogados. Trabalho realizado enquanto designer na P9 Digital.",
        tag: ID_TAG_BRAND_DESIGN
    },
    {
        id: uuidv4,
        name: 'Logo',
        href: '#',
        imageSrc: RevallaRe,
        imageAlt: "Front of men's Logo in black.",
        tag: ID_TAG_LOGO
    },
    {
        id: uuidv4,
        name: 'Logo',
        href: '#',
        imageSrc: RevallaRe,
        imageAlt: "Front of men's Logo in black.",
        tag: ID_TAG_LOGO
    },
]