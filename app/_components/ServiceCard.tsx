import { AnimatePresence, motion } from "framer-motion"

export default function ServiceCard ({ children, title, description, delay=0.5 }: { children: React.ReactNode, title: string, description: string, delay: number }) {
    return (
        <AnimatePresence initial={false} mode="wait">
        <motion.div
            initial={{ opacity: 0, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.85 }}className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s"  style={{visibility: "visible", animationDuration: "0.7s", animationDelay: `${delay}s`, animationName: "fadeInUp"}}
        >
            <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                    {children}
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">{title}</h3>
                <p className="text-gray-500">{description}</p>
            </div>
        </motion.div>
        </AnimatePresence>
    )
}