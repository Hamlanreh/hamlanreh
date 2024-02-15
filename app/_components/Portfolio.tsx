"use client"
import { useState } from "react"
import PortfolioCard from "./PortfolioCard"
import PorfolioTab from "./PortfolioTab"


export default function Portfolio () {
    const [showCard, setShowCard] = useState("all");

    const handleProject = (category: string) => {
        setShowCard(category);
    };


    return (
        <main  id="portfolio" className="pt-40 pb-12 px-4 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
            <div className="container mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                            <span className="text-primary mb-2 block text-lg font-semibold">
                                Our Portfolio
                            </span>
                            <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                                Our Recent Projects
                            </h2>
                            <p className="text-body-color text-base dark:text-dark-6">
                                These are some of my web application projects to showcase my skills to potential client, employers or tech enthusiats.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-wrap justify-center -mx-4">
                    <div className="w-full px-4">
                        <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                            <PorfolioTab onClick={() => handleProject("all")} tabName="All Projects" showCard={showCard} />
                            <PorfolioTab onClick={() => handleProject("branding")} tabName="Branding" showCard={showCard} />
                            <PorfolioTab onClick={() => handleProject("design")} tabName="Design" showCard={showCard} />
                            <PorfolioTab onClick={() => handleProject("marketing")} tabName="Marketing" showCard={showCard} />
                            <PorfolioTab onClick={() => handleProject("development")} tabName="Development" showCard={showCard} />
                        </ul>
                    </div>
                </div>

                <div className="block md:flex flex-wrap justify-center gap-10 md:-mx-2 mb-24">
                    <PortfolioCard 
                        ImageHref="https://images.unsplash.com/photo-1457282367193-e3b79e38f207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80"
                        category="Branding"
                        title="Woman standing under blue sky"
                        demoUrl=""
                        codeUrl=""
                        showCard={showCard}
                    />
                    <PortfolioCard 
                        ImageHref="https://images.unsplash.com/photo-1457282367193-e3b79e38f207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80"
                        category="Marketing"
                        title="Woman standing under blue sky"
                        demoUrl=""
                        codeUrl=""
                        showCard={showCard}
                    />
                    <PortfolioCard 
                        ImageHref="https://images.unsplash.com/photo-1457282367193-e3b79e38f207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80"
                        category="Branding"
                        title="Woman standing under blue sky"
                        demoUrl=""
                        codeUrl=""
                        showCard={showCard}
                    />
                    <PortfolioCard 
                        ImageHref="https://images.unsplash.com/photo-1457282367193-e3b79e38f207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80"
                        category="Marketing"
                        title="Woman standing under blue sky"
                        demoUrl=""
                        codeUrl=""
                        showCard={showCard}
                    />
                </div>

                <div>
                    <button type="button" className="bg-blue-500 text-white block mx-auto px-20 py-4 font-semibold rounded dark:bg-gray-100 dark:text-gray-800">View more &rarr;</button>
                </div>
            </div>
        </main>
    )
}