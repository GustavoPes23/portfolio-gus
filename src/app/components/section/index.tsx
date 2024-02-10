import { FC, memo } from 'react'

import type { SectionProps } from './types';

const Index: FC<SectionProps> = ({
    className,
    ariaLabelledby,
    children
}) => {
    return (
        <section
            className={className || ""}
            aria-labelledby={ariaLabelledby || ""}
        >
            {children}
        </section>
    )
}

export default memo(Index);