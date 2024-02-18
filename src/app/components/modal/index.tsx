import { Fragment, useRef, FC, memo, Children } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import type { ModalProps } from "./types";
import ImageWithLazyLoad from '../image/imageWithLazyLoad';

import type { SubItems } from '@/app/constants/types';

import Hr from '../hr';

const Index: FC<ModalProps> = ({
    open,
    setOpen,
    subItems,
    usingMarginModal
}) => {
    const cancelButtonRef = useRef<HTMLButtonElement>(null);
    const arrItems: SubItems[] = Object.values(subItems);

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel
                                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl"
                            >
                                <div className="fixed top-0 right-0 mt-4 mr-4">
                                    <div className="sm:hidden">
                                        <button
                                            type="button"
                                            className="text-white text-2xl"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            X
                                        </button>
                                    </div>
                                </div>
                                {Children.toArray(
                                    arrItems.map(({ link }: SubItems, index) => (
                                        <>
                                            <ImageWithLazyLoad
                                                src={link}
                                                alt={link}
                                            />
                                            {usingMarginModal && index !== arrItems.length - 1 && (<Hr />)}
                                        </>
                                    ))
                                )}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default memo(Index);
