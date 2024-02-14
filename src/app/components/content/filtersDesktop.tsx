import { FC, memo, Children } from 'react'

import Text from '../text';

import type { FiltersData } from '@/app/constants/types'

import type { FilterProps } from './types';

import BasicLoading from '../loading/basicLoading';

const classNames = (...classes: string[]): string => classes.filter(Boolean).join(' ');

const FiltersDesktop: FC<FilterProps> = ({
    filters,
    filter,
    setFilter,
    loading
}) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string, name: string): void => {
        e.preventDefault();
        setFilter(id !== "geral" ? id : "");
    };

    if (loading || !filters) {
        return (
            <>
                {Children.toArray(
                    [1, 2, 3, 4].map((key) => (
                        <BasicLoading />
                    ))
                )}
            </>
        );
    }

    return (
        <>
            {filters.map(({ id, name, total }: FiltersData) => (
                <a
                    href="#"
                    onClick={(e) => handleClick(e, id, name)}
                    key={id}
                    className={classNames(
                        filter && filter === id || !filter && id === "geral" ? 'text-black font-semibold' : 'text-gray-400',
                        'block px-4 py-2 text-sm'
                    )}
                >
                    <Text>
                        {name.toUpperCase()}
                    </Text>
                    <Text
                        className='ms-2 text-gray-300'
                    >
                        {total}
                    </Text>
                </a>
            ))}
        </>
    )
}

export default memo(FiltersDesktop);