import React, { useState } from 'react';
import './AirportInfo.css';
import Places from './Places';

function AirportInfo() { 
    const [places,setPlaces] = useState([])
    const [originplace,setOriginplace] = useState("")
    const [destinationplace,setDestinationplace] = useState("")
    const [outboundpartialdate,setOutboundpartialdate] = useState("")
    const [inboundpartialdate,setInboundpartialdate] = useState("")
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
            // const qString = {
            //     "originplace": originplace,
            //     "destinationplace": destinationplace,
            //     "outboundpartialdate": outboundpartialdate,
            //     "inboundpartialdate": inboundpartialdate
            // }
            // let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US?" + new URLSearchParams(qString), reqOptions) //doesn't work
            let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US/" + originplace + "/" + destinationplace + "/" + 
                outboundpartialdate + "/" + inboundpartialdate, reqOptions)
            // let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-01-01?inboundpartialdate=2019-09-01",
            //     reqOptions) //doesn't work
            // let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US/AMS-sky/LAX-sky/2021-03/2021-04", reqOptions) //works
            // let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/?" + new URLSearchParams({originplace: originplace})
            //     + "/" + new URLSearchParams({destinationplace: destinationplace}), reqOptions) //doesn't work
            // let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/?" +  originplace + "/" + destinationplace, 
            //     reqOptions) //doesn't work
            console.log(response)
            response = await response.json()
            console.log(response)
            // console.log(response) //{Places: Array(10)}
            setPlaces(response.Places)
            console.log(response.Places) //Warning: Each child in a list should have a unique "key" prop.
        }
        fetchMyAPI()
        setShowPlaces(true)
        setOriginplace("")
        setDestinationplace("")
        setOutboundpartialdate("")
        setInboundpartialdate("")
    }

    return(
        <div className="airportinfo">
           <form onSubmit={handleSubmit}>
                <label htmlFor="queryInput">From:</label>
                <input id="queryInput" value={originplace} onChange={e => setOriginplace(e.target.value)} placeholder="AMS-sky" required/>
                <label htmlFor="queryInput">To:</label>
                <input id="queryInput" value={destinationplace} onChange={e => setDestinationplace(e.target.value)} placeholder="LAX-sky" required/>
                <br />
                <label htmlFor="queryInput">Depart:</label>
                <input id="queryInput" value={outboundpartialdate} onChange={e => setOutboundpartialdate(e.target.value)} placeholder = "2021-03" required/>
                <label htmlFor="queryInput">Arrive:</label>
                <input id="queryInput" value={inboundpartialdate} onChange={e => setInboundpartialdate(e.target.value)} placeholder = "2021-04" required/>

                {/* <label htmlFor="queryInput">State or Country:</label> //need to comment with braces */}
                {/* <input id="queryInput" value={query} onChange={e => setQuery(e.target.value)} required/> */}
                <button className="search">Submit</button>
           </form>
           { showPlaces ? <Places places={places}></Places> : <></>}
        </div>
    )
}

export default AirportInfo;
