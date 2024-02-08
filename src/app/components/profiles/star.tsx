import { FC, memo } from 'react'
import Image from '../image';

import StarImage from "../../../../public/images/estrela.svg"

const Star: FC = () => {
    return (
        <Image
            className="star"
            src={StarImage.src}
            alt="star"
        />
    )
}

export default memo(Star);