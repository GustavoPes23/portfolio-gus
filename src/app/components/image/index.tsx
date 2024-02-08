import { FC, memo } from 'react'

import { ImageProps } from './types';

const Image: FC<ImageProps> = ({
    className,
    src,
    alt
}) => {
    return (
        <img
            loading="lazy"
            src={src}
            alt={alt}
            className={`h-full w-full object-cover object-center ${className || ""}`}
        />
    )
}

export default memo(Image);