import { FC, memo, useState } from "react";

import Badge from "../badge";
import Modal from "../modal";

import { motion, AnimatePresence } from "framer-motion";

import ImageWithLazyLoad from "../image/imageWithLazyLoad";

import { ID_TAG_MOTIVO_VIDEO } from "@/app/constants/Tags";

import type { ItemData } from "@/app/constants/types";

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Item: FC<ItemData> = ({ tag, image, subItems }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { src, alt } = image;
  const { code, description } = tag;
  const usingMarginModal: boolean = subItems && code === ID_TAG_MOTIVO_VIDEO;

  return (
    <>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -30, opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        variants={item}
      >
        <motion.div
          className="group relative item"
          onClick={() => setOpen((prev: boolean) => !prev)}
        >
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-64 rounded-3xl">
            <Badge className="badge inline-flex items-center rounded-md bg-black/50 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
              {description.toUpperCase()}
            </Badge>
            <ImageWithLazyLoad
              src={src}
              alt={alt}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
        </motion.div>

        {subItems && (
          <AnimatePresence mode="wait">
            <Modal
              open={open}
              setOpen={setOpen}
              subItems={subItems}
              usingMarginModal={usingMarginModal}
            />
          </AnimatePresence>
        )}
      </motion.div>
    </>
  );
};

export default memo(Item);
