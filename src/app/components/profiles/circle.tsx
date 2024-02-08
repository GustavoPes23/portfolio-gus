import { FC, memo } from 'react'
import Image from '../image';

import CircleImage from "../../../../public/images/circle.svg"

const Circle: FC = () => {
    return (
        <Image
            className="h-12 w-12 circle hidden sm:inline-flex"
            src={CircleImage.src}
            alt="circle"
        />
    )
}

export default memo(Circle);