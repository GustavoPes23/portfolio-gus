import { FC, memo } from 'react'

import Badge from "../badge";

import ImageWithLazyLoad from '../image/imageWithLazyLoad';

import { ItemData } from '@/app/constants/types';

import { TranslatesTags } from '@/app/constants/Translates';

const Item: FC<ItemData> = ({ 
    tag, 
    image,
    setOpen
}) => {
    const { imageSrc, imageAlt } = image;

    return (
        <div 
            className="group relative item"
            onClick={() => setOpen((prev: boolean) => !prev)}
        >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-64 rounded-3xl">
                <Badge
                    className="badge inline-flex items-center rounded-md bg-gray-600 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10"
                >
                    {TranslatesTags[tag]}
                </Badge>
                <ImageWithLazyLoad 
                    src={imageSrc}
                    alt={imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
        </div>
    )
}

export default memo(Item);