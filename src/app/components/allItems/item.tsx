import { FC, memo, useState } from 'react'

import Badge from "../badge";
import Modal from "../modal";

import ImageWithLazyLoad from '../image/imageWithLazyLoad';

import { ItemData } from '@/app/constants/types';

const Item: FC<ItemData> = ({
    tag,
    image,
    subItems
}) => {
    const [open, setOpen] = useState<boolean>(false);
    const { src, alt } = image;

    return (
        <>
            <div
                className="group relative item"
                onClick={() => setOpen((prev: boolean) => !prev)}
            >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-64 rounded-3xl">
                    <Badge
                        className="badge inline-flex items-center rounded-md bg-black/50 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10"
                    >
                        {tag.description.toUpperCase()}
                    </Badge>
                    <ImageWithLazyLoad
                        src={src}
                        alt={alt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                </div>
            </div>
            {subItems && (
                <Modal
                    open={open}
                    setOpen={setOpen}
                    subItems={subItems}
                />
            )}
        </>
    )
}

export default memo(Item);