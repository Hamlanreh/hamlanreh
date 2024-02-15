import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion"


export default function Hero() {
    return (
        <div id="home" className="relative bg-white pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px]">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full px-4 lg:w-5/12">
                        <div className="hero-content">
                            <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                                Kickstart Startup Your Website Ideas with HamLanreh
                            </h1>
                            <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
                                With Hamlanreh, you can share and discuss your projects
                                and business ideas together with us and watch it turn into reality 
                                by delivering beyound expectations.
                            </p>
                            <ul className="flex flex-wrap items-center">
                                <li>
                                    <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-blue-500 px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7" >
                                        Hire Me
                                    </a>
                                </li>
                                <li>
                                    <a href="#portfolio" className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-[#464646] hover:text-primary dark:text-white">
                                        <span className="mr-2">
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="12" cy="12.6152" r="12" fill="#3758F9" />
                                                <rect x="7.99893" y="14.979" width="8.18182" height="1.63636" fill="white" />
                                                <rect x="11.2717" y="7.61523" width="1.63636" height="4.09091" fill="white" />
                                                <path d="M12.0898 14.1606L14.9241 11.0925H9.25557L12.0898 14.1606Z" fill="white" />
                                            </svg>
                                        </span>
                                        View Portfolio
                                    </a>
                                </li>
                            </ul>
                            <div className="clients pt-16">
                                <h6 className="mb-6 flex items-center text-xs font-normal text-gray-600 dark:text-gray-600">
                                    Some Of Our Clients
                                    <span className="ml-3 inline-block h-px w-8 bg-gray-600"></span>
                                </h6>
                                <div className="flex items-center space-x-4">
                                    <SingleImage href="#" imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg" />
                                    <SingleImage href="#" imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg" />
                                    <SingleImage href="#" imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden px-4 lg:block lg:w-1/12"></div>
                    <AnimatePresence initial={false} mode="wait">
                    <motion.div 
                        className="w-full px-4 lg:w-6/12"
                        initial={{ filter: "blur(5px)",  opacity: 0 }}
                        whileInView={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="lg:ml-auto lg:text-right">
                            <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                <Image
                                    src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                                    alt="hero"
                                    className="max-w-full lg:ml-auto"
                                    width={700}
                                    height={700}
                                />
                                <span className="absolute -bottom-8 -left-8 z-[-1]">
                                    <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" /><circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" /><circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" /><circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" /><circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" /><circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" /><circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" /><circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" /><circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" /><circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" /><circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" /><circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" /><circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" /><circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" /><circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" /><circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" /><circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" /><circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" /><circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" /><circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" /><circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" /><circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" /><circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" /><circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" /><circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}



const SingleImage = ({ href, imgSrc }: { href: string, imgSrc: string }) => {
    return (
        <a href={href} className="flex w-full items-center justify-center">
            <Image src={imgSrc} alt="brand image" className="h-10 w-full" width={100} height={100} />
        </a>
    );
};