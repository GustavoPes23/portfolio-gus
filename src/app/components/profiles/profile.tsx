import { FC, memo } from 'react'

import { ProfileProps } from './types';

import ImageWithLazyLoad from '../image/imageWithLazyLoad';

const Profile: FC<ProfileProps> = ({
    src,
    alt,
    link
}) => {
    return (
        <div 
            className="group relative profile-individual"
            onClick={() => window.open(link, "_blank")}
        >
            <div 
                className="aspect-h-1 aspect-w-1 overflow-hidden lg:aspect-none group-hover:opacity-75 sm:h-56 sm:w-56 h-80 w-80 rounded-3xl "
            >
                <ImageWithLazyLoad 
                    src={src}
                    alt={alt}
                />
            </div>
        </div>
    )
}

export default memo(Profile);