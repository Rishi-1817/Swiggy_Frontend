import React from 'react'
import { useState,useEffect } from 'react'
import RestoSchimmer from './shimmer/RestoSchimmer'
function RestuarentScroll() {
    const [resto, setResto] = useState([])
        async function getScrollImages() {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.948138138232776&lng=77.70414485202988&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const data = await response.json()
            setResto(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        }
        useEffect(() => {
            getScrollImages()
        }, [])
        if(resto.length==0){
            return <RestoSchimmer/>
        }
        else{
            return (
    <div>
        <h1>Top restaurant chains in Bangalore</h1>
        <div className='scroll'>
            {
                resto.map((x)=>{
                    return(
                        <div>
               <div className='food-card'>
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${x.info.cloudinaryImageId}`}/>
                <h2 className='dots'>{x.info.name}</h2>
                <h4><i className='bi bi-star'></i> {x.info.avgRating} . {x.info.sla.slaString} mins</h4>
                <p className='dots'>{x.info.cuisines.join(", ")} </p>
                <p>{x.info.areaName}</p>
            
            </div> 
            </div>
                    )
                })
            }
         </div>
    </div>
  );
        }
}

export default RestuarentScroll