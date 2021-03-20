import React from 'react';
import './Quotes.css';

function Quotes(props) { 

    console.log(props)

    function findCarrierName(e) {
        var i;
        for(i = 0; i < props.carrierPlanes.length; i++) {
            if(props.carrierPlanes[i].CarrierId == e) {
                return props.carrierPlanes[i].Name;
            }
        }
    }

    return(
        <div className="quotes">
            <table>
                <thead>
                    <tr>
                        <th>Quote ID</th>
                        <th>Min Price</th>
                        <th>Outbound Carrier IDs</th>
                        <th>Outbound Carrier Name</th>
                        <th>Outbound Leg Departure Date</th>
                        <th>Inbound Carrier IDs</th>
                        <th>Inbound Carrier Name</th>
                        <th>Inbound Leg Departure Date</th>
                        <th>Direct Flight?</th>
                        <th>Quote Date and Time</th>
                    </tr>
                </thead>
                <tbody>
                    {props.quotes.map(quote => {
                        return (<tr className="selected" id={quote.QuoteId} onClick={() => console.log('Quote ID: ' + quote.QuoteId)}>
                            <th>{quote.QuoteId}</th>
                            <th>{quote.MinPrice}</th>
                            <th>{quote.OutboundLeg.CarrierIds}</th>
                            <th>{findCarrierName(quote.OutboundLeg.CarrierIds)}</th>
                            <th>{quote.OutboundLeg.DepartureDate}</th>
                            <th>{quote.InboundLeg.CarrierIds}</th>
                            <th>{findCarrierName(quote.InboundLeg.CarrierIds)}</th>
                            <th>{quote.InboundLeg.DepartureDate}</th>
                            <th>{"" + quote.Direct}</th>
                            <th>{quote.QuoteDateTime}</th>
                        </tr>)
                    })}
                </tbody>
            </table>
         </div>
    )
}

export default Quotes;