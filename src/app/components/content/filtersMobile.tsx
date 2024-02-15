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
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, code: string, name: string): void => {
        e.preventDefault();
        setFilter(code !== "geral" ? code : "")
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
                filters.map(({ code, description }: FiltersData) => (
                    <Menu.Item
                        key={code}
                    >
                        <a
                            href="#"
                            onClick={(e) => handleClick(e, code, description)}
                            className={classNames(
                                filter && filter === code || !filter && code === "geral" ? 'text-black font-semibold' : 'text-gray-400',
                                'block px-4 py-2 text-sm'
                            )}
                        >
                            {description.toUpperCase()}
                        </a>
                    </Menu.Item>
                ))
            }
        </>
    )
}

export default memo(FiltersMobile)