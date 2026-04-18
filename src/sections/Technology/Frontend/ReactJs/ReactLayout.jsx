import React from 'react'
import TechnologyRouteMeta from '../../TechnologyRouteMeta'
import { technologySeo } from './seo'
import ReactInfo from './ReactInfo'
import ReactService from './ReactService'


const ReactJsLayout = () => {
    return (
        <>
            <TechnologyRouteMeta {...technologySeo} />
            <ReactService />
            <ReactInfo />
        </>
    )
}

export default ReactJsLayout