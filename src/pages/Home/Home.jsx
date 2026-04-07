import React, { useState } from 'react'
import { HeroSection, Status, Services, IndustryCards, TechLogos, CompletedProjects, SecondHeroSection } from '../../sections/Home'

const Home = () => {
    const [activeHero, setActiveHero] = useState("grid");

    return (
        <div>
            {activeHero === "grid" ? (
                <SecondHeroSection onToggleSection={() => setActiveHero("image")} />
            ) : (
                <HeroSection onToggleSection={() => setActiveHero("grid")} />
            )}
            <Status/>
            <Services/>
            <IndustryCards/>
            <TechLogos/>
            <CompletedProjects/>
        </div>
    )
}

export default Home