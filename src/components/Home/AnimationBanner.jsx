import React from 'react'

const banner = "https://www.ivaninfotech.com/wp-content/uploads/2024/06/animationgraphic-img2.png"

const AnimationBanner = () => {
    return (
        <div className="max-lg:flex-1 text-center">
            <img
                // src='/banner/t.png'
                src={banner}
                alt="Innovative Teamwork"
                className="object-cover w-full h-64 lg:h-96 transition-transform duration-500 hover:scale-105"                 
            />
        </div>
    )
}

export default AnimationBanner