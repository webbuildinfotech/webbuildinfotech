import React from 'react'

const banner = "https://www.ivaninfotech.com/wp-content/uploads/2024/06/animationgraphic-img2.png"

const AnimationBanner = () => {
    return (
        <div className="max-lg:flex-1 text-center">
            <img
                // src='/banner/t.png'
                src={banner}
                alt="Innovative Teamwork"
                className="max-w-full h-full"
                style={{ maxHeight: '550px' }} // Slightly increased image size
            />
        </div>
    )
}

export default AnimationBanner