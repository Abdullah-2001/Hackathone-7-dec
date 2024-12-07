import React from 'react'

const Breadcrumb = () => {
    return (
        <nav className="relative flex w-full flex-wrap items-center justify-between py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4">
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <nav className="w-full rounded-md" aria-label="breadcrumb">
                    <ol className="list-reset ms-2 flex">
                        <li>
                            <a
                                href="#"
                                className="motion-reduce:transition-none-none text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <span className="mx-2 text-black/60 dark:text-white/60">/</span>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="motion-reduce:transition-none-none text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80"
                            >
                                Library
                            </a>
                        </li>
                        <li>
                            <span className="mx-2 text-black/60 dark:text-white/60">/</span>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="motion-reduce:transition-none-none text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80"
                            >
                                Data
                            </a>
                        </li>
                    </ol>
                </nav>
            </div>
        </nav>
    )
}

export default Breadcrumb
