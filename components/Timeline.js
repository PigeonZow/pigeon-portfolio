// edited from https://flowbite.com/docs/components/timeline/

const Timeline = () => {
    return (
        <ol className="items-center md:flex mx-4 md:mx-8 lg:mx-32">
            <li className="relative mb-6 md:mb-0">
                <div className="flex items-center">
                    <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-white dark:bg-white ring-8 dark:ring-red-900 shrink-0">
                    </div>
                    <div className="hidden md:flex w-full bg-zinc-200 h-0.5 dark:bg-zinc-900"></div>
                </div>
                <div className="mt-3 md:pr-8">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-black">
                        Simon Fraser University
                    </h3>
                    <p className="block mb-2 text-sm font-normal leading-none text-zinc-600 dark:text-zinc-700">Mar 24 2022 - Current</p>
                    <p className="text-base font-normal text-zinc-700 dark:text-zinc-600">
                        <span className="font-bold">Research Assistant</span> <br />
                        Data sourcing, cleaning, and analysis. (Python)
                    </p>
                </div>
            </li>
            <li className="relative mb-6 md:mb-0">
                <div className="flex items-center">
                    <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-white dark:bg-yellow-500 ring-8 dark:ring-red-700 shrink-0">
                    </div>
                    <div className="hidden md:flex w-full bg-zinc-200 h-0.5 dark:bg-zinc-900"></div>
                </div>
                <div className="mt-3 md:pr-8">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-black">
                        Kongsberg Maritime
                    </h3>
                    <p className="block mb-2 text-sm font-normal leading-none text-zinc-600 dark:text-zinc-700">May 3 2021 - Aug 28 2021</p>
                    <p className="text-base font-normal text-zinc-700 dark:text-zinc-600">
                        <span className="font-bold">Software Tester/Developer</span> <br />
                        Desktop applications built with Qt. (QML, C++, JavaScript)
                    </p>
                </div>
            </li>
            <li className="relative mb-6 md:mb-0">
                <a className="cursor-pointer" href="https://www.linkedin.com/in/patrick-zh/" target="_blank" rel="noreferrer">
                    <div className="flex items-center">
                        <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-white dark:bg-white ring-8 dark:ring-slate-900 shrink-0">
                            <svg className="fill-[#0e76a8]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </div>
                        <div className="hidden md:flex w-full bg-zinc-200 h-0.5 dark:bg-zinc-900"></div>
                    </div>
                    <div className="mt-3 md:pr-8">
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-black">...</h3>
                        <p className="block mb-2 text-sm font-normal leading-none text-zinc-600 dark:text-zinc-700">...</p>
                        <p className="text-base font-normal text-zinc-700 dark:text-zinc-600">
                            <span className="font-bold">...</span> <br />
                            View my experience on LinkedIn for better details!
                        </p>
                    </div>
                </a>
            </li>
        </ol>
    )
}

export default Timeline;
