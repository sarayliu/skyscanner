import React, { useState } from 'react';
import './AirportInfo.css';
import Quotes from './Quotes';
import Places from './Places';

function AirportInfo() { 
    const [places1,setPlaces1] = useState([])
    const [query1,setQuery1] = useState("")
    const [places2,setPlaces2] = useState([])
    const [query2,setQuery2] = useState("")
    const [quotes,setQuotes] = useState([])
    const [quotes2,setQuotes2] = useState([])
    const [originplace,setOriginplace] = useState("")
    const [destinationplace,setDestinationplace] = useState("")
    const [outboundpartialdate,setOutboundpartialdate] = useState("")
    const [inboundpartialdate,setInboundpartialdate] = useState("")
    const [showPlaces,setShowPlaces] = useState(false)
    const [showQuotes,setShowQuotes] = useState(false)

    function handlePlacesSubmit(e) {
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
            let response1 = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?" + new URLSearchParams({query: query1}), reqOptions)
            response1 = await response1.json()
            //console.log(response1)
            setPlaces1(response1.Places)
            //console.log(response1.Places)

            let response2 = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?" + new URLSearchParams({query: query2}), reqOptions)
            response2 = await response2.json()
            setPlaces2(response2.Places)
            //console.log(response2.Places)
        }
        fetchMyAPI()
        setShowPlaces(true)
    }

    function handleQuotesSubmit(e) {
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
            setQuotes(response.Quotes)
            setQuotes2(response.Quotes)
            console.log(response.Quotes) //Warning: Each child in a list should have a unique "key" prop.
        }
        fetchMyAPI()
        setShowQuotes(true)
        {/*}
        setOriginplace("")
        setDestinationplace("")
        setOutboundpartialdate("")
        setInboundpartialdate("")
        */}
    }

    return(
        <div className="airportinfo">
           <form onSubmit={handlePlacesSubmit}> {/*handleQuotesSubmit}>*/}
                <label htmlFor="queryInput">Origin State:</label>
                <input id="queryInput" value={query1} onChange={e => setQuery1(e.target.value)} placeholder="California" required/>
                <label htmlFor="queryInput">Destination State:</label>
                <input id="queryInput" value={query2} onChange={e => setQuery2(e.target.value)} placeholder="New York" required/>

                {/*<label htmlFor="queryInput">From:</label>
                <input id="queryInput" value={originplace} onChange={e => setOriginplace(e.target.value)} placeholder="AMS-sky" required/>
                <label htmlFor="queryInput">To:</label>
                <input id="queryInput" value={destinationplace} onChange={e => setDestinationplace(e.target.value)} placeholder="LAX-sky" required/>
                <br />
                <label htmlFor="queryInput">Depart:</label>
                <input id="queryInput" value={outboundpartialdate} onChange={e => setOutboundpartialdate(e.target.value)} placeholder = "2021-03" required/>
                <label htmlFor="queryInput">Return (round trip):</label>
                <input id="queryInput" value={inboundpartialdate} onChange={e => setInboundpartialdate(e.target.value)} placeholder = "2021-04" required/>*/}

                {/* <label htmlFor="queryInput">State or Country:</label> //need to comment with braces */}
                {/* <input id="queryInput" value={query} onChange={e => setQuery(e.target.value)} required/> */}
                <button className="search">Submit</button>
           </form>
           { showPlaces ? 
                <div>
                    <h2>Choose an origin airport in the table below. Scroll down to choose a destination airport.</h2>
                        <Places places={places1}></Places> 
                    <h2>Choose a destination airport:</h2>
                        <Places places={places2}></Places>
                </div> : <></>
            }
        </div>
    )
}

export default AirportInfo;

{
    /*           {showQuotes ?
           //  <div>
           //      <Quotes quotes={quotes}></Quotes>
           //      <Quotes quotes={quotes2}></Quotes>
           //      <Places></Places>
           //  </div> : <></>} */
}
