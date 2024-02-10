import React, { FC, memo, Suspense } from 'react';

import type { ImageProps } from './types';

const LazyImage = React.lazy(() => import('./index'));

const ImageWithLazyLoad: FC<ImageProps> = ({
    className,
    src,
    alt
}) => {
    return (
        <Suspense 
            fallback={<div>Loading...</div>}
        >
            <LazyImage 
                className={className} 
                src={src} 
                alt={alt} 
            />
        </Suspense>
    );
};

export default memo(ImageWithLazyLoad);
