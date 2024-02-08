import { FC, memo } from 'react'

import type { TextProps } from './types'

const Index: FC<TextProps> = ({
    className,
    children
}) => {
    return <span className={className || ""}>{children}</span>
}

export default memo(Index)