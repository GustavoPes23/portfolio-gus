import { FC, memo, Children } from 'react'

import { Menu } from '@headlessui/react'

import BasicLoading from '../loading/basicLoading';

import type { FiltersData } from '@/app/constants/types'
import type { FilterProps } from './types';

const classNames = (...classes: string[]): string => classes.filter(Boolean).join(' ');

const FiltersMobile: FC<FilterProps> = ({ 
    filters, 
    filter, 
    setFilter,
    loading
}) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string, name: string): void => {
        e.preventDefault();
        setFilter(id !== "geral" ? id : "")
    };

    if (loading || !filters) {
        return (
            <>
                {Children.toArray(
                    [1, 2, 3, 4].map((_) => (
                        <BasicLoading />
                    ))
                )}
            </>
        );
    }

    return (
        <>
            {
                filters.map(({ id, name }: FiltersData) => (
                    <Menu.Item
                        key={id}
                    >
                        <a
                            href="#"
                            onClick={(e) => handleClick(e, id, name)}
                            className={classNames(
                                filter && filter === id || !filter && id === "geral" ? 'text-black font-semibold' : 'text-gray-400',
                                'block px-4 py-2 text-sm'
                            )}
                        >
                            {name.toUpperCase()}
                        </a>
                    </Menu.Item>
                ))
            }
        </>
    )
}

export default memo(FiltersMobile)