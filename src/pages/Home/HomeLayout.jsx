import React from 'react'
import Home from './Home'
import TechLogos from './TechLogos'
import IndustryCards from './industries'
import StatsComponent from './Stats'
import CompletedProjects from './CompletedProjects'
import Services from './ExpertiseGrid'

const HomeLayout = () => {
    return (
        <div>
            <Home />
            <StatsComponent/>
            <Services/>
            <IndustryCards/>
            <TechLogos/>
            <CompletedProjects/>
        </div>
    )
}

export default HomeLayout