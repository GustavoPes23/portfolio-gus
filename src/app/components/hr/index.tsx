import { FC, memo } from 'react'

import type { HrProps } from './types';

const Index: FC<HrProps> = ({ className }) => {
    return (
        <hr 
            className={`h-px my-1 bg-white-100 border-0 ${className || ""}`}
        />
    )
}

export default memo(Index);