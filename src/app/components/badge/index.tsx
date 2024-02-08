import { FC, memo } from 'react'
import { BadgeProps } from './types'

const Index: FC<BadgeProps> = ({
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

export default memo(Index)