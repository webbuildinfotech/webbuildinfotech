import React from 'react'
import { HeroSection, Status, Services, IndustryCards, TechLogos, CompletedProjects } from '../../sections/Home'

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <Status/>
            <Services/>
            <IndustryCards/>
            <TechLogos/>
            <CompletedProjects/>
        </div>
    )
}

export default Home