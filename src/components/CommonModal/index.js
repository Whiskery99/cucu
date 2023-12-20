"use client"

import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"


export default function CommonModal({ modalTitle, showModalTitle, mainContent, buttonComponent, showButtons, show, setShow, user }){
    return(
        <Transition.Root show={show} as={Fragment}>
            <Dialog as="div" className={`relative z-10`} onClose={setShow}>
                <Transition.Child
                 as={Fragment}
                 enter="ease-in-out duration-900"
                 enterFrom="opacity-0"
                 enterTo="opacity-100"
                 leave="ease-in-out duration-500"
                 leaveFrom="opacity-100"
                 leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-300 bg-opacity-75 transition-opacity" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 text-black">
                            <Transition.Child
                             as={Fragment}
                             enter="ease-in-out duration-900"
                             enterFrom="opacity-0"
                             enterTo="opacity-100"
                             leave="ease-in-out duration-500"
                             leaveFrom="opacity-100"
                             leaveTo="opacity-0"
                            >
                                <Dialog.Panel className={`w-screen max-w-md text-black`}>
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white text-[#fd961a] dark:text-[#fd961a] shadow-xl">
                                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 text-[#fd961a]">
                                            {
                                                showModalTitle ? (
                                                  <div className="flex items-start justify-between text-[#fd961a]">
                                                    <Dialog.Title className={`dark:text-[#fd961a] text-[#fd961a]`}>{modalTitle}</Dialog.Title>
                                                  </div>
                                                ) : null
                                            }
                                            <div className="mt-20 text-[#fd961a]">{mainContent}</div>
                                        </div>
                                        {
                                            showButtons ? (
                                                    <div className="border-t border-gray-300 px-4 py-6 sm:px-6 text-[#fd961a]">
                                                    {buttonComponent}
                                                </div>
                                            ) : null
                                        }
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}