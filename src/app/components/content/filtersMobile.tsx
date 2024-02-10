import { FC, memo } from 'react'

import { Menu } from '@headlessui/react'

import type { FiltersData } from '@/app/constants/types'
import type { FilterProps } from './types';

const classNames = (...classes: string[]): string => classes.filter(Boolean).join(' ');

const FiltersMobile: FC<FilterProps> = ({ filters, filter, setFilter }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string, name: string): void => {
        e.preventDefault();
        setFilter(id !== "geral" ? name : "")
    };

    return (
        <>
            {
                filters.map(({ id, name, total }: FiltersData) => (
                    <Menu.Item
                        key={id}
                    >
                        <a
                            href="#"
                            onClick={(e) => handleClick(e, id, name)}
                            className={classNames(
                                filter && filter === name || !filter && id === "geral" ? 'text-black font-semibold' : 'text-gray-400',
                                'block px-4 py-2 text-sm'
                            )}
                        >
                            {name}
                        </a>
                    </Menu.Item>
                ))
            }
        </>
    )
}

export default memo(FiltersMobile)