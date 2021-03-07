import React, { useState } from 'react';
import './AirportInfo.css';
import Places from './Places';

function AirportInfo() { 
    const [places,setPlaces] = useState([])
    const [query,setQuery] = useState("")
    const [showPlaces,setShowPlaces] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        async function fetchMyAPI() {
            const reqOptions = {
                method: 'GET',
                headers: {
                    "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`, //need to remove <> and add "" around the key in env
                    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                    "useQueryString": true
                }
            }
            // console.log(process.env.REACT_APP_API_KEY)
            // console.log(`${process.env.REACT_APP_API_KEY}`)
            let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?" + new URLSearchParams({query: query}), reqOptions)
            response = await response.json()
            // console.log(response) //{Places: Array(10)}
            setPlaces(response.Places)
            console.log(response.Places) //Warning: Each child in a list should have a unique "key" prop.
        }
        fetchMyAPI()
        setShowPlaces(true)
        setQuery("")
    }

    return(
        <div className="airportinfo">
           <form onSubmit={handleSubmit}>
                <label htmlFor="queryInput">State or Country:</label>
                <input id="queryInput" value={query} onChange={e => setQuery(e.target.value)} required/>
                <button className="search">Submit</button>
           </form>
           { showPlaces ? <Places places={places}></Places> : <></>}
        </div>
    )
}

export default AirportInfo;
