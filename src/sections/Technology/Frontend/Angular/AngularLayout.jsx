import React from 'react'
import TechnologyRouteMeta from '../../TechnologyRouteMeta'
import { technologySeo } from './seo'
import AngularInfo from './AnugularInfo'
import AngularService from './AngularService '


const AngularLayout = () => {
    return (
        <>
            <TechnologyRouteMeta {...technologySeo} />
            <AngularService />
            <AngularInfo />
        </>
    )
}

export default AngularLayout