import { FC, memo } from 'react'

import type { MainProps } from './types'

const Index: FC<MainProps> = ({
    className,
    children
}) => {
    return (
        <main
            className={className || ""}
        >
            {children}
        </main>
    )
}

export default memo(Index)