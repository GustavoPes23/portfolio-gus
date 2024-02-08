import { FC, memo } from 'react'

import type { ButtonProps } from './types';

const Index: FC<ButtonProps> = ({
    className,
    children,
    onClick,
}) => {
    return (
        <button 
            type="button" 
            className={className || ""}
            onClick={onClick}
        >
                {children}
        </button>

    )
}

export default memo(Index);