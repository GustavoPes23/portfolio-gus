import { FC, memo } from 'react'

import ImageWithLazyLoad from '../image/imageWithLazyLoad';

import StarImage from "../../../../public/images/estrela.svg"

const Star: FC = () => {
    return (
        <ImageWithLazyLoad
            className="star"
            src={StarImage.src}
            alt="star"
        />
    )
}

export default memo(Star);