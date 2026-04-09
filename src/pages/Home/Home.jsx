import React, { useState } from 'react'
import { HeroSection, Status, Services, IndustryCards, TechLogos, CompletedProjects, SecondHeroSection, WhyChooseUs } from '../../sections/Home'
import { CosmicParallaxDemo, DemoHeroGeometric } from '../../components/homeSection'
import Testimonials from '../../components/ui/testimonials'

const Home = () => {
    const [activeHero, setActiveHero] = useState("grid");

    return (
        <div>
            <CosmicParallaxDemo />
            {/* <DemoHeroGeometric /> */}
            {/* {activeHero === "grid" ? (
                <SecondHeroSection onToggleSection={() => setActiveHero("image")} />
            ) : (
                <HeroSection onToggleSection={() => setActiveHero("grid")} />
            )} */}
            <Status />
            <WhyChooseUs />
            <Services />
            <IndustryCards />
            <TechLogos />
            <CompletedProjects />
            {/* <Testimonials /> */}
        </div>
    )
}

export default Home