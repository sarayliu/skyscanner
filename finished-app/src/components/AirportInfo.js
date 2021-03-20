import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './AirportInfo.css';
import Quotes from './Quotes';
import Places from './Places';

function AirportInfo() { 
    var [places1,setPlaces1] = useState([])
    const [query1,setQuery1] = useState("")
    const [places2,setPlaces2] = useState([])
    const [query2,setQuery2] = useState("")
    const [quotes,setQuotes] = useState([])
    const [carriers, setCarriers] = useState([])
    //const [quotes2,setQuotes2] = useState([])
    //const [originplace,setOriginplace] = useState("")
    //const [destinationplace,setDestinationplace] = useState("")
    const [outboundpartialdate,setOutboundpartialdate] = useState("")
    const [inboundpartialdate,setInboundpartialdate] = useState("")
    const [currency, setCurrency] = useState("")
    const [showPlaces,setShowPlaces] = useState(false)
    const [showQuotes,setShowQuotes] = useState(false)

    //const [originMessage, setOriginMessage] = useState(false)
    const [destinationMessage, setDestinationMessage] = useState(false)

    var originplaceStr = "";
    var destinationplaceStr = "";

    //const originText = React.createRef();

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

    function handleOriginSubmit(e) { //need to capitalize function to make it a React component and be able to use useEffect
        e.preventDefault()
        if (localStorage.getItem("myJson") !== null) {
              var passedJson = localStorage.getItem("myJson") //get saved data anytime
              console.log('Origin Airport: ' + passedJson)
              console.log(passedJson)
              // setOriginplace(passedJson) //doesn't update immediately since it goes into a queue
              // console.log("originplace set to: " + originplace)
              // console.log(originplace)

              // useEffect(() => {setOriginplace(passedJson)}, []) //can't actually use in a conditional or in a nested function

              // setOriginplace(prevState => ({ //didn't update
              //    ...prevState,
              //    originplace: passedJson, // overwrite the value of the field to update
              // }));
              // console.log("originplace set to: " + originplace)

              // async function updateOriginplace() { //always one behind
              //    let response3 = await setOriginplace(passedJson)
              // }
              // updateOriginplace()
              // console.log("originplace set to: " + originplace)

              window.originplaceStr = passedJson;
              console.log("originplaceStr set to: " + window.originplaceStr)
              //setOriginMessage(true)
              ReactDOM.render(<h4>Origin airport {window.originplaceStr} selected!</h4>, document.getElementById('originID'))
              {/*originText.current.focus();*/}
         }
         else {
             console.log('Nothing stored')
        }
    }

    function handleQuotesSubmit(e) {
        e.preventDefault()
        console.log("originplaceStr set to: " + originplaceStr)
        async function fetchMyAPI() {
            const reqOptions = {
                method: 'GET',
                headers: {
                    "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`, //need to remove <> and add "" around the key in env
                    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                    "useQueryString": true
                }
            }

            if (localStorage.getItem("myJson") !== null) {
                 var passedJson2 = localStorage.getItem("myJson") //get saved data anytime
                 console.log('Destination Airport: ' + passedJson2)
                 // setDestinationplace(passedJson2) //doesn't update immediately since it goes into a queue
                 // console.log("destinationplace set to: " + destinationplace)
                 // setDestinationMessage(true)

                // setDestinationplace(prevState => ({ //didn't update
                //     destinationplace: passedJson2, // overwrite the value of the field to update
                // }));
                // console.log("destinationplace set to: " + destinationplace)

                window.destinationplaceStr = passedJson2;
                console.log("destinationplaceStr set to: " + window.destinationplaceStr)
                setDestinationMessage(true)
            }
            else {
                console.log('Nothing stored')
            }

            //React.findDOMNode(this.refs.form).reset();
            // console.log(process.env.REACT_APP_API_KEY)
            // console.log(`${process.env.REACT_APP_API_KEY}`)
            // const qString = {
            //     "originplace": originplace,
            //     "destinationplace": destinationplace,
            //     "outboundpartialdate": outboundpartialdate,
            //     "inboundpartialdate": inboundpartialdate
            // }
            // let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US?" + new URLSearchParams(qString), reqOptions) //doesn't work
            
            // console.log(originplace)
            // console.log(destinationplace)

            console.log(originplaceStr)
            console.log(destinationplaceStr)

            // let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US/" + originplace + "/" + destinationplace + "/" + 
                // outboundpartialdate + "/" + inboundpartialdate, reqOptions)

            let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/" + currency + "/en-US/" + window.originplaceStr + "/" + window.destinationplaceStr + "/" + 
                outboundpartialdate + "/" + inboundpartialdate, reqOptions)
            // let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-01-01?inboundpartialdate=2019-09-01",
            //     reqOptions) //doesn't work
            // let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US/AMS-sky/LAX-sky/2021-03/2021-04", reqOptions) //works
            // let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/?" + new URLSearchParams({originplace: originplace})
            //     + "/" + new URLSearchParams({destinationplace: destinationplace}), reqOptions) //doesn't work
            // let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/?" +  originplace + "/" + destinationplace, 
            //     reqOptions) //doesn't work
            console.log('response: ', response)
            response = await response.json()
            console.log('response json: ', response)
            //setQuotes(response.Quotes)
            setQuotes(response.Quotes)
            console.log('quotes: ', quotes)
            //console.log(quotes.Quotes)
            console.log('quotes set to response')
            setCarriers(response.Carriers)
            //setQuotes2(response.Quotes)
            //console.log('response.Quotes: ', response.Quotes)
        }
        fetchMyAPI()
        setShowQuotes(true)

        {/*
        setOriginplace("")
        setDestinationplace("")
        setOutboundpartialdate("")
        setInboundpartialdate("")
        */}
    }

    {/*
    function callbackFunction(childData) {
      this.setState({message: childData})
    }

    places1 = (value) => {
        console.log('In Parent component');
        console.log(value);
        // this.setState({selectedRow:value});
        // this.setState({childObj:value});
    }

    */}

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
                <br />*/}

                <label htmlFor="queryInput">Depart:</label>
                <input id="queryInput" value={outboundpartialdate} onChange={e => setOutboundpartialdate(e.target.value)} placeholder = "2021-03" required/>
                <label htmlFor="queryInput">Return (round trip):</label>
                <input id="queryInput" value={inboundpartialdate} onChange={e => setInboundpartialdate(e.target.value)} placeholder = "2021-04" required/>

                <label htmlFor="queryInput">Currency:</label>
                <input id="queryInput" value={currency} onChange={e => setCurrency(e.target.value)} placeholder = "USD" required/>

                {/* <label htmlFor="queryInput">State or Country:</label> //need to comment with braces */}
                {/* <input id="queryInput" value={query} onChange={e => setQuery(e.target.value)} required/> */}
                <button className="search">Submit Preliminary Information</button>
           </form>
           { showPlaces ? 
                <div>
                    <h2>Choose an origin airport in the table below by clicking a row. Scroll down to submit.</h2>
                        <Places places={places1}></Places> 
                        <button className="search" onClick={handleOriginSubmit}>Submit Origin Airport</button>
                        <div id='originID'></div>
                        {/*{originMessage ? <h4 ref={originText}>Origin airport {window.originplaceStr} selected!</h4> : <></>}*/}
                    <h2>Choose a destination airport:</h2>
                        <Places places={places2}></Places>
                        <button className="search" onClick={handleQuotesSubmit}>Submit Destination Airport and See Flight Options</button>
                        {destinationMessage ? <h4>Destination airport {window.destinationplaceStr} selected!</h4> : <></>}
                        {showQuotes ? <Quotes quotes={quotes} carrierPlanes={carriers}></Quotes> : <></>}
                        
                </div> : <></>
            }
        </div>

    )
}

export default AirportInfo;

{/*     {showQuotes ?
           //  <div>
           //      <Quotes quotes={quotes}></Quotes>
           //      <Quotes quotes={quotes2}></Quotes>
           //      <Places></Places>
           //  </div> : <></>} */
}
