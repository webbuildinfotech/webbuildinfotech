import React from 'react'
import Home from './Home'
import TechLogos from './TechLogos'
import IndustryCards from './industries'
import ExpertiseGrid from './ExpertiseGrid'
import StatsComponent from './Stats'
import CompletedProjects from './CompletedProjects'

const HomeLayout = () => {
    return (
        <div>
            <Home />
            <StatsComponent/>
            <TechLogos/>
            <CompletedProjects/>
            <IndustryCards/>
            <ExpertiseGrid/>

        </div>
    )
}

export default HomeLayout