import { FC, memo } from 'react'

const ImageLoading: FC = () => {
    return (
        <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
            <div className="flex items-center justify-center w-full h-48 lg:h-64 rounded-3xl bg-gray-300 sm:w-96 dark:bg-gray-700">
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    )
};

export default memo(ImageLoading);