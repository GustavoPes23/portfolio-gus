import { FC, memo } from 'react'

import { Filters } from '@/app/constants/Filters'

import type { FiltersData } from '@/app/constants/types'

import type { FilterProps } from './types';

const classNames = (...classes: string[]): string => classes.filter(Boolean).join(' ');

const FiltersContent: FC<FilterProps> = ({ filter, setFilter }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string, name: string): void => {
        e.preventDefault();
        setFilter(id !== "geral" ? name : "")
    };

    return (
        <>
            {Filters.map(({ id, name, total }: FiltersData) => (
                <a
                    href="#"
                    onClick={(e) => handleClick(e, id, name)}
                    key={id}
                    className={classNames(
                        filter && filter === name || !filter && id === "geral" ? 'text-black font-semibold' : 'text-gray-400',
                        'block px-4 py-2 text-sm'
                    )}
                    >
                        {`${name} ${total}`}
                </a>
            ))}
        </>
    )
}

export default memo(FiltersContent);