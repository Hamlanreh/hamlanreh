import Image from "next/image"
import { AnimatePresence, motion } from 'framer-motion'    
import SkillProgress from "@app/_components/SkillProgress"
    
export default function About() {
    return (    
        <section id="about" className="bg-gray-100 py-40">
            <div className="container mx-auto min-h-screen p-4">
                <h2 className="text-4xl md:text-5xl text-center md:text-left dark:text-white font-bold ml-0 md:ml-6 mb-8">About me</h2>
                <AnimatePresence initial={false} mode="wait">
                <motion.div 
                    className="w-full flex flex-col md:flex-row gap-x-14 mt-14"
                    initial={{ opacity: 0, filter: "blur(5px)" }}
                    whileInView={{ opacity: "100%", filter: "blur(0)" }}
                    transition={{ duration: 0.9 }}
                >
                    <div className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center">
                        <Image 
                            className="w-full md:w-11/12"
                            src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                            alt="hamlanreh" 
                            width={400} 
                            height={400} 
                        />
                    </div>
                    <div className="w-full md:w-2/3">
                        <h2 className="text-3xl md:text-5xl dark:text-white font-bold mb-6">Oluwabi Ahmed</h2>
                        <h3 className="text-xl md:text-3xl dark:text-white font-bold mb-8">Web developer</h3>
                        <p className="text-lg mb-3">
                            I am a MERN fullstack web developer who is able to realise projects from the ground up. I am well versed in all the key languages and am able to design, code, debug and deploy in an organised and efficient manner. My self learning process has given me a lot of opportunities to develop my critical thinking and problem solving skills.
                        </p>            
                        <p className="text-lg mb-8">
                            I&#39;m able to organize, communicate and adapt to different situations. I&#39;m an individual who is highly motivated, willing to learn and develop my soft and hard skills which would serve me and my employer in the future.
                        </p>
                        <div>
                            <button type="button" className="bg-blue-500 text-white px-14 py-5 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Download CV</button>
                        </div>            
                    </div>
                </motion.div>
                </AnimatePresence>
                <AnimatePresence initial={false} mode="wait">
                <motion.div 
                    className="w-full mx-auto mt-16"
                    initial={{ x: "-100%", opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.9 }}
                >
                    <h4 className="text-3xl md:text-4xl dark:text-white font-bold mb-8">Skills</h4>
                    <div className="flex flex-col md:flex-row flex-wrap gap-10">
                        <SkillProgress skill="HTML & CSS" percent={90} skillColor="orange" /> 
                        <SkillProgress skill="JavaScript" percent={90} skillColor="skyblue" /> 
                        <SkillProgress skill="Bootstrap & Tailwind" percent={80} skillColor="green" /> 
                        <SkillProgress skill="React & Nextjs" percent={80} skillColor="yellow" /> 
                        <SkillProgress skill="Python & Django" percent={70} skillColor="purple" /> 
                        <SkillProgress skill="Git" percent={80} skillColor="red" /> 
                        <SkillProgress skill="Wordpress" percent={85} skillColor="cadetblue" /> 
                    </div>
                </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}