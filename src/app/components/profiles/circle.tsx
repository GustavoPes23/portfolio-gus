import { FC, memo } from 'react'

import ImageWithLazyLoad from '../image/imageWithLazyLoad';

import CircleImage from "../../../../public/images/circle.svg"

const Circle: FC = () => {
    return (
        <ImageWithLazyLoad
            className="h-12 w-12 circle hidden sm:inline-flex"
            src={CircleImage.src}
            alt="circle"
        />
    )
}

export default memo(Circle);