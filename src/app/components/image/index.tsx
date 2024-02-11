import { FC, memo } from 'react'

import Image from 'next/image'

import { ImageProps } from './types';

const Index: FC<ImageProps> = ({
    className,
    src,
    alt
}) => {
    return (
        <Image
            loading="lazy"
            src={src}
            width={500}
            height={500}
            alt={alt}
            className={`h-full w-full object-cover object-center ${className || ""}`}
        />
    )
}

export default memo(Index);