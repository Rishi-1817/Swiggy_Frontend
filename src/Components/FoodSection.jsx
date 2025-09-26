import React from 'react'
import { useState, useEffect } from 'react'
import FoodSchimmer from './shimmer/FoodSchimmer'
function FoodSection() {
    const [resto, setResto] = useState([])
    const [search, setSearch] = useState("")
    async function getScrollImages() {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.948138138232776&lng=77.70414485202988&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const data = await response.json()
        setResto(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }
    useEffect(() => {
        getScrollImages()
    }, [])
    function handleRatings(){
     const FilteredResto=resto.filter((x)=>{
        return x.info.avgRating>4.3
     })
     setResto(FilteredResto)
    }
    function handleFastDelivery(){
        const FilteredDelivery=resto.filter((x)=>{
            return x.info.sla.deliveryTime<40
        })
        setResto(FilteredDelivery)
    }
     function handleVeg(){
        const FilteredHotel=resto.filter((x)=>{
           return x.info.veg==true 
        })
        setResto(FilteredHotel)
     }
     function handlePrice(){
        const FilteredPrice=resto.filter((x)=>{
            const price = x.info.costForTwo 
            return price<= 30000;
        })
        setResto(FilteredPrice)
     }

     function handeSearch(){
        const searchFilter=resto.filter((x)=>{
            return x.info.name.toLowerCase().includes(search.toLowerCase())
        })
        setResto(searchFilter)
     }

    if(resto.length==0){
        return <FoodSchimmer/>
    }
    else{
        return (
        <div>
            <h1>Restaurants with online food delivery in Bangalore</h1>
            <div className='filter-section'>
                <div className="button-flex">
                    <button onClick={handleFastDelivery}>Fast Delivery</button>
                    <button onClick={handleRatings}>Rating 4.3+</button>
                    <button onClick={handleVeg}>Pure Veg</button>
                    <button>Offers</button>
                    <button onClick={handlePrice}>less than Rs.300</button>
                </div>
                <div className="input-flex">
                    <input type="search resto" value={search} onChange={(x)=>{setSearch(x.target.value)}} />
                    <button onClick={handeSearch}>Search</button>
                </div>

            </div>
            <div className="resto-cards">
                {
                    resto.map((x) => {
                        return (
                            <div className='food-card'>
                                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${x.info.cloudinaryImageId}`} />
                                <h2 className='dots'>{x.info.name}</h2>
                                <h4><i className='bi bi-star'></i> {x.info.avgRating} . {x.info.sla.slaString} mins</h4>
                                <p className='dots'>{x.info.cuisines.join(", ")} </p>
                                <p>{x.info.areaName}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
    }
}

export default FoodSection