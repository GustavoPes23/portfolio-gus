import { FC, Children } from "react";

import Item from "./item";

import ImageLoading from "../loading/imageLoading";

import type { ItemsProps } from "./types";

import type { ItemData } from "@/app/constants/types";

import "./styles.css";
import { motion } from "framer-motion";

const getFilter = (filter: string, items?: ItemData[]): null | ItemData[] => {
  if (!items) {
    return null;
  }

  if (!filter) {
    return items;
  }

  return items.filter((item) => item.tag.code === filter);
};

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const Index: FC<ItemsProps> = ({ items, filter, loading }) => {
  const filtered: ItemData[] | null = getFilter(filter, items);

  return (
    <motion.ul className="mx-auto max-w-2xl lg:max-w-7xl"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 xl:gap-x-8">
        {loading
          ? Children.toArray([1, 2, 3, 4, 5, 6].map((_) => <ImageLoading />))
          : filtered &&
            filtered.map(({ id, name, image, tag, subItems }: ItemData) => (
              <Item
                key={id}
                id={id}
                name={name}
                image={image}
                tag={tag}
                subItems={subItems}
              />
            ))}
      </div>
    </motion.ul>
  );
};

export default Index;
