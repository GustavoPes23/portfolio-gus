import { FC, memo } from 'react'

import type { TextProps } from './types'

const index: FC<TextProps> = ({
    className,
    children
}) => {
    return <span className={className || ""}>{children}</span>
}

export default memo(index)