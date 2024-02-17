import React, { FC, memo, Suspense } from 'react';

import ImageLoading from '../loading/imageLoading';

import type { ImageProps } from './types';

const LazyImage = React.lazy(() => import('./index'));

const ImageWithLazyLoad: FC<ImageProps> = ({
    className,
    src,
    alt
}) => {
    return (
        <Suspense 
            fallback={<ImageLoading />}
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
