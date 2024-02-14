import { FC, memo } from 'react'

const BasicLoading: FC = () => {
    return (
        <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
            <div className="w-full">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-4"></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    )
};

export default memo(BasicLoading);