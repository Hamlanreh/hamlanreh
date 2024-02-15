import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from "framer-motion"


export default function PortfolioCard({
      showCard,
      category,
      ImageHref,
      title,
      demoUrl,
      codeUrl,
    }: any) {
    return (
        <AnimatePresence initial={false} mode="wait">
        <motion.div
            initial={{ opacity: 0, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className={`w-full lg:w-1/4 mb-4 md:mb-0 ${ showCard === "all" || showCard === category.toLowerCase() ? "block" : "hidden" }`}
        >
            <div className="w-full">
                <div className="bg-white rounded-lg overflow-hidden shadow relative">
                    <Image className="h-52 w-full object-cover object-center" src={ImageHref} alt={title} width={400} height={400}/>
                    <div className="relative p-4 pt-10 h-auto md:h-64 lg:h-64">
                        <div className="relative mt-2 lg:absolute top-0 mb-4 md:hidden lg:flex gap-x-3">
                            <Link className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#something</Link>
                            <Link className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#sky</Link>
                        </div>

                        <Link href="#portfolio" className="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
                            {title}
                        </Link>

                        <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem blanditiis unde asperiores? Officia amet perspiciatis ad quibusdam incidunt eaque, nobis, eveniet neque porro id commodi quisquam debitis!
                        </div>
                        
                        <div className="flex items-center gap-x-6">
                            <Link href={demoUrl} className="flex items-center gap-x-2 rounded py-1 px-3 shadow-sm bg-gray-100">
                                <svg height={28} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="style=fill"> <g id="eye-open"> <path id="Subtract" fillRule="evenodd" clipRule="evenodd" d="M12.0001 3.96997C8.19618 3.96997 4.69299 5.94267 2.28282 9.27342C1.721 10.0475 1.46509 11.0419 1.46509 11.995C1.46509 12.9478 1.7209 13.942 2.28246 14.716C4.69264 18.0471 8.19599 20.02 12.0001 20.02C15.804 20.02 19.3072 18.0473 21.7174 14.7165C22.2792 13.9424 22.5351 12.948 22.5351 11.995C22.5351 11.0421 22.2793 10.0479 21.7177 9.27392C19.3075 5.94286 15.8042 3.96997 12.0001 3.96997ZM9.75012 12C9.75012 10.755 10.7551 9.75 12.0001 9.75C13.2451 9.75 14.2501 10.755 14.2501 12C14.2501 13.245 13.2451 14.25 12.0001 14.25C10.7551 14.25 9.75012 13.245 9.75012 12ZM12.0001 8.25C9.92669 8.25 8.25012 9.92657 8.25012 12C8.25012 14.0734 9.92669 15.75 12.0001 15.75C14.0736 15.75 15.7501 14.0734 15.7501 12C15.7501 9.92657 14.0736 8.25 12.0001 8.25Z" fill="#000000"></path> </g> </g> </g></svg>
                                <span>Demo</span>
                            </Link>
                            <Link href={codeUrl} className="flex-1 flex items-center gap-x-2 rounded py-1 px-3 shadow-sm bg-gray-100">
                                <svg height={28} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#161514" fillRule="evenodd" d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z" clipRule="evenodd"></path></g></svg>
                                <span>View code</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
        </AnimatePresence>
    )
}
