import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ScrollSchimmer from './shimmer/ScrollSchimmer'
function ScrollerImages() {
    const [images, setImages] = useState([])
    async function getScrollImages() {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.948138138232776&lng=77.70414485202988&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const data = await response.json()
        setImages(data.data.cards[0].card.card.imageGridCards.info)
    }
    useEffect(() => {
        getScrollImages()
    }, [])
    if(images.length==0){
        return <ScrollSchimmer/>
    }
    else{
        return (
        <div>
            <h1>Rishi, what's on your mind?</h1>
            <div className='scroll'>
                {
                    images.map((x) => {
                        return (
                            <div>
                                <img className='scrool-img' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${x.imageId}`} />
                            </div>
                        )
                    })
                }

            </div>
        </div>

    );
    }
}

export default ScrollerImages