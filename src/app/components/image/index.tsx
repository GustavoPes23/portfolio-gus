import { FC, memo } from 'react'

import { ImageProps } from './types';

const Profile: FC<ImageProps> = ({
    className,
    src,
    alt
}) => {
    return (
        <img
            src={src}
            alt={alt}
            className={`h-full w-full object-cover object-center ${className || ""}`}
        />
    )
}

export default memo(Profile);