import React, { useState } from 'react'
import { HeroSection, Status, Services, IndustryCards, TechLogos, CompletedProjects, SecondHeroSection, WhyChooseUs } from '../../sections/Home'
import { CosmicParallaxDemo, DemoHeroGeometric, CyberCosmicHero } from '../../components/homeSection'
import Testimonials from '../../components/ui/testimonials'
import { PageMeta, toCanonicalUrl } from '@/components/pageMeta'
import { RoutePaths } from '@/routes/constant/path'

const Home = () => {
    const [activeHero, setActiveHero] = useState("grid");

    return (
        <div>
            <PageMeta
                title="WebBuild Infotech | Web Development & Design Agency"
                description="WebBuild Infotech builds high-performance websites and apps with React, Node.js, and modern cloud stacks. Explore services, portfolio, and technologies."
                keywords="web development agency, React development, Node.js, full stack, WebBuild Infotech, custom software"
                canonical={toCanonicalUrl(RoutePaths.HOME)}
            />
            <CyberCosmicHero />
            {/* <CosmicParallaxDemo /> */}
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