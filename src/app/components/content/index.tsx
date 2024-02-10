import { Fragment, useState, FC, memo, useMemo } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import Main from '../main'
import Section from '../section'
import FiltersContent from './filtersDesktop'
import AllItems from '../allItems'
import FiltersMobile from './filtersMobile'

import { Filters } from '@/app/constants/Filters'
import { Items } from '@/app/constants/Items'
import { ID_TAG_LOGO, ID_TAG_BRAND_DESIGN, ID_TAG_SITE } from '@/app/constants/Tags'
import { FiltersData, ItemData } from '@/app/constants/types'

const setTotalFilters = (Items: ItemData[], Filters: FiltersData[]): void => {
    const totalSites: number = Items.filter((item) => item.tag === ID_TAG_SITE)?.length;
    const totalBrandDesign: number = Items.filter((item) => item.tag === ID_TAG_BRAND_DESIGN)?.length;
    const totalLogo: number = Items.filter((item) => item.tag === ID_TAG_LOGO)?.length;
    const total: number = totalSites + totalBrandDesign + totalLogo;

    Filters.forEach((filter) => {
        switch (filter.id) {
            case ID_TAG_SITE:
                filter.total = totalSites;

                break;
            case ID_TAG_BRAND_DESIGN:
                filter.total = totalBrandDesign;

                break;
            case ID_TAG_LOGO:
                filter.total = totalLogo;

                break;
            default:
                filter.total = total;
        }
    });
};

const Index: FC = () => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState<boolean>(false);
    const [filter, setFilter] = useState<string>("");

    useMemo(() => setTotalFilters(Items, Filters), [Items, Filters]);

    return (
        <div className="bg-white">
            <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                <div className="flex items-center justify-between px-4">
                                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                    <button
                                        type="button"
                                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                        onClick={() => setMobileFiltersOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <Main
                className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            >
                <>
                    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                        <div
                            className='hidden md:inline-flex gap-x-20'
                        >
                            <FiltersContent
                                filters={Filters}
                                filter={filter}
                                setFilter={setFilter}
                            />
                        </div>

                        <div className="flex items-center md:hidden">
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                        Organizar por
                                        <ChevronDownIcon
                                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            <FiltersMobile
                                                filters={Filters}
                                                filter={filter}
                                                setFilter={setFilter}
                                            />
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>

                    <Section
                        ariaLabelledby="items"
                        className="pb-24 pt-6"
                    >
                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
                            <div className="lg:col-span-3">
                                <AllItems
                                    filter={filter}
                                    items={Items}
                                />
                            </div>
                        </div>
                    </Section>
                </>
            </Main>
        </div>
    )
}

export default memo(Index);