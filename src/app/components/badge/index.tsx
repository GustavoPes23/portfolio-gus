import { FC, memo } from 'react'
import { BadgeProps } from './types'

const index: FC<BadgeProps> = ({
    className,
    children
}) => {
    return (
        <span
            className={className || ""}
        >
            {children}
        </span>
    )
}

export default memo(index)