import React from 'react';
import './Quotes.css';

function Quotes(props) { 

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
                        return (<tr id={quote.QuoteId} onClick={() => console.log(quote.QuoteId)}>
                            <th>{quote.QuoteId}</th>
                            <th>${quote.MinPrice}</th>
                            <th>{quote.OutboundLeg.CarrierIds}</th>
                            <th>{quote.OutboundLeg.DepartureDate}</th>
                            <th>{quote.InboundLeg.CarrierIds}</th>
                            <th>{quote.InboundLeg.DepartureDate}</th>
                            <th>{quote.Direct}</th>
                            <th>{quote.QuoteDateTime}</th>
                        </tr>)
                    })}
                </tbody>
            </table>
         </div>
    )
}

export default Quotes;

/*                     {props.places.map(place => {
                        return (<tr id={place.PlaceId}>
                            <th>{place.PlaceId}</th>
                            <th>{place.PlaceName}</th>
                            <th>{place.CountryId}</th>
                            <th>{place.RegionId}</th>
                            <th>{place.CityId}</th>
                            <th>{place.CountryName}</th>
                        </tr>)
                    })}

{
    "Quotes": [
        {
            "QuoteId": 1,
            "MinPrice": 378,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    1859
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-29T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1859
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-14T00:00:00"
            },
            "QuoteDateTime": "2021-03-08T10:42:00"
        },
        {
            "QuoteId": 2,
            "MinPrice": 433,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    1218
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-24T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    881
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-03T00:00:00"
            },
            "QuoteDateTime": "2021-03-04T12:20:00"
        },
        {
            "QuoteId": 3,
            "MinPrice": 652,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    1218
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-15T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1793
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-16T00:00:00"
            },
            "QuoteDateTime": "2021-03-07T15:00:00"
        },
        {
            "QuoteId": 4,
            "MinPrice": 656,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    1816
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-22T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1793
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-03T00:00:00"
            },
            "QuoteDateTime": "2021-03-04T23:54:00"
        },
        {
            "QuoteId": 5,
            "MinPrice": 661,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    845
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-26T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    845
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-04T00:00:00"
            },
            "QuoteDateTime": "2021-03-07T10:46:00"
        },
        {
            "QuoteId": 6,
            "MinPrice": 735,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    845
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-28T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    845
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-04T00:00:00"
            },
            "QuoteDateTime": "2021-03-07T02:54:00"
        },
        {
            "QuoteId": 7,
            "MinPrice": 737,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    845
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-26T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    845
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-10T00:00:00"
            },
            "QuoteDateTime": "2021-03-07T19:17:00"
        },
        {
            "QuoteId": 8,
            "MinPrice": 739,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    845
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-28T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    845
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-18T00:00:00"
            },
            "QuoteDateTime": "2021-03-07T14:57:00"
        },
        {
            "QuoteId": 9,
            "MinPrice": 746,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    845
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-24T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    845
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-04T00:00:00"
            },
            "QuoteDateTime": "2021-03-08T01:02:00"
        },
        {
            "QuoteId": 10,
            "MinPrice": 757,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    1218
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-31T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1467
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-07T00:00:00"
            },
            "QuoteDateTime": "2021-03-07T03:35:00"
        },
        {
            "QuoteId": 11,
            "MinPrice": 789,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-10T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-02T00:00:00"
            },
            "QuoteDateTime": "2021-03-05T19:42:00"
        },
        {
            "QuoteId": 12,
            "MinPrice": 789,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-25T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-27T00:00:00"
            },
            "QuoteDateTime": "2021-03-05T21:41:00"
        },
        {
            "QuoteId": 13,
            "MinPrice": 789,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-25T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-25T00:00:00"
            },
            "QuoteDateTime": "2021-03-04T22:53:00"
        },
        {
            "QuoteId": 14,
            "MinPrice": 789,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-27T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-10T00:00:00"
            },
            "QuoteDateTime": "2021-03-04T18:59:00"
        },
        {
            "QuoteId": 15,
            "MinPrice": 789,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-28T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-06T00:00:00"
            },
            "QuoteDateTime": "2021-03-04T18:09:00"
        },
        {
            "QuoteId": 16,
            "MinPrice": 789,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-11T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-12T00:00:00"
            },
            "QuoteDateTime": "2021-03-06T14:23:00"
        },
        {
            "QuoteId": 17,
            "MinPrice": 789,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-15T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-01T00:00:00"
            },
            "QuoteDateTime": "2021-03-07T22:19:00"
        },
        {
            "QuoteId": 18,
            "MinPrice": 789,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-19T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-02T00:00:00"
            },
            "QuoteDateTime": "2021-03-07T17:48:00"
        },
        {
            "QuoteId": 19,
            "MinPrice": 789,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-22T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-05T00:00:00"
            },
            "QuoteDateTime": "2021-03-06T22:59:00"
        },
        {
            "QuoteId": 20,
            "MinPrice": 789,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-25T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-01T00:00:00"
            },
            "QuoteDateTime": "2021-03-07T02:12:00"
        },
        {
            "QuoteId": 21,
            "MinPrice": 789,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-25T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-13T00:00:00"
            },
            "QuoteDateTime": "2021-03-07T17:49:00"
        },
        {
            "QuoteId": 22,
            "MinPrice": 789,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-26T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-02T00:00:00"
            },
            "QuoteDateTime": "2021-03-07T02:22:00"
        },
        {
            "QuoteId": 23,
            "MinPrice": 789,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-27T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-03T00:00:00"
            },
            "QuoteDateTime": "2021-03-07T02:32:00"
        },
        {
            "QuoteId": 24,
            "MinPrice": 789,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-29T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-04T00:00:00"
            },
            "QuoteDateTime": "2021-03-06T12:42:00"
        },
        {
            "QuoteId": 25,
            "MinPrice": 789,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-29T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-05T00:00:00"
            },
            "QuoteDateTime": "2021-03-07T03:10:00"
        },
        {
            "QuoteId": 26,
            "MinPrice": 789,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-29T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-29T00:00:00"
            },
            "QuoteDateTime": "2021-03-07T14:30:00"
        },
        {
            "QuoteId": 27,
            "MinPrice": 789,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-30T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-04T00:00:00"
            },
            "QuoteDateTime": "2021-03-06T12:42:00"
        },
        {
            "QuoteId": 28,
            "MinPrice": 789,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-30T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-05T00:00:00"
            },
            "QuoteDateTime": "2021-03-06T12:42:00"
        },
        {
            "QuoteId": 29,
            "MinPrice": 789,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-30T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-06T00:00:00"
            },
            "QuoteDateTime": "2021-03-07T03:24:00"
        },
        {
            "QuoteId": 30,
            "MinPrice": 826,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    881
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-31T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    870
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-01T00:00:00"
            },
            "QuoteDateTime": "2021-03-06T22:57:00"
        },
        {
            "QuoteId": 31,
            "MinPrice": 850,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-27T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-03T00:00:00"
            },
            "QuoteDateTime": "2021-03-07T02:33:00"
        },
        {
            "QuoteId": 32,
            "MinPrice": 1098,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-29T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-14T00:00:00"
            },
            "QuoteDateTime": "2021-03-08T10:42:00"
        },
        {
            "QuoteId": 33,
            "MinPrice": 1098,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-30T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-06T00:00:00"
            },
            "QuoteDateTime": "2021-03-07T03:24:00"
        },
        {
            "QuoteId": 34,
            "MinPrice": 1098,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-31T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-07T00:00:00"
            },
            "QuoteDateTime": "2021-03-07T03:35:00"
        },
        {
            "QuoteId": 35,
            "MinPrice": 1128,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-28T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-06T00:00:00"
            },
            "QuoteDateTime": "2021-03-04T18:09:00"
        },
        {
            "QuoteId": 36,
            "MinPrice": 1128,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-29T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-04T00:00:00"
            },
            "QuoteDateTime": "2021-03-06T12:42:00"
        },
        {
            "QuoteId": 37,
            "MinPrice": 1128,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-29T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-05T00:00:00"
            },
            "QuoteDateTime": "2021-03-07T03:10:00"
        },
        {
            "QuoteId": 38,
            "MinPrice": 1128,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-29T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-29T00:00:00"
            },
            "QuoteDateTime": "2021-03-07T14:30:00"
        },
        {
            "QuoteId": 39,
            "MinPrice": 1128,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-30T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-05T00:00:00"
            },
            "QuoteDateTime": "2021-03-06T12:42:00"
        },
        {
            "QuoteId": 40,
            "MinPrice": 1146,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-27T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-10T00:00:00"
            },
            "QuoteDateTime": "2021-03-04T18:59:00"
        },
        {
            "QuoteId": 41,
            "MinPrice": 1157,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-25T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-25T00:00:00"
            },
            "QuoteDateTime": "2021-03-04T22:53:00"
        },
        {
            "QuoteId": 42,
            "MinPrice": 1158,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-28T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-04T00:00:00"
            },
            "QuoteDateTime": "2021-03-07T02:54:00"
        },
        {
            "QuoteId": 43,
            "MinPrice": 1158,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-28T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-18T00:00:00"
            },
            "QuoteDateTime": "2021-03-07T14:57:00"
        },
        {
            "QuoteId": 44,
            "MinPrice": 1193,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-25T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-01T00:00:00"
            },
            "QuoteDateTime": "2021-03-07T02:12:00"
        },
        {
            "QuoteId": 45,
            "MinPrice": 1193,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-25T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-13T00:00:00"
            },
            "QuoteDateTime": "2021-03-07T17:49:00"
        },
        {
            "QuoteId": 46,
            "MinPrice": 1216,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-24T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-03T00:00:00"
            },
            "QuoteDateTime": "2021-03-04T12:21:00"
        },
        {
            "QuoteId": 47,
            "MinPrice": 1223,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-22T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-03T00:00:00"
            },
            "QuoteDateTime": "2021-03-04T23:54:00"
        },
        {
            "QuoteId": 48,
            "MinPrice": 1223,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-25T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-27T00:00:00"
            },
            "QuoteDateTime": "2021-03-05T21:41:00"
        },
        {
            "QuoteId": 49,
            "MinPrice": 1223,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-22T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-05T00:00:00"
            },
            "QuoteDateTime": "2021-03-06T22:59:00"
        },
        {
            "QuoteId": 50,
            "MinPrice": 1223,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-24T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-04T00:00:00"
            },
            "QuoteDateTime": "2021-03-08T01:02:00"
        },
        {
            "QuoteId": 51,
            "MinPrice": 1253,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-26T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-02T00:00:00"
            },
            "QuoteDateTime": "2021-03-07T02:22:00"
        },
        {
            "QuoteId": 52,
            "MinPrice": 1253,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-26T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-04T00:00:00"
            },
            "QuoteDateTime": "2021-03-08T10:05:00"
        },
        {
            "QuoteId": 53,
            "MinPrice": 1253,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-26T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-10T00:00:00"
            },
            "QuoteDateTime": "2021-03-07T19:16:00"
        },
        {
            "QuoteId": 54,
            "MinPrice": 1289,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-15T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-01T00:00:00"
            },
            "QuoteDateTime": "2021-03-07T22:19:00"
        },
        {
            "QuoteId": 55,
            "MinPrice": 1306,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-15T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-16T00:00:00"
            },
            "QuoteDateTime": "2021-03-07T15:00:00"
        },
        {
            "QuoteId": 56,
            "MinPrice": 1348,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-19T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-02T00:00:00"
            },
            "QuoteDateTime": "2021-03-07T17:48:00"
        },
        {
            "QuoteId": 57,
            "MinPrice": 1467,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-30T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-04T00:00:00"
            },
            "QuoteDateTime": "2021-03-06T12:42:00"
        },
        {
            "QuoteId": 58,
            "MinPrice": 1825,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-11T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-12T00:00:00"
            },
            "QuoteDateTime": "2021-03-06T14:23:00"
        },
        {
            "QuoteId": 59,
            "MinPrice": 1854,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-10T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-02T00:00:00"
            },
            "QuoteDateTime": "2021-03-05T19:42:00"
        },
        {
            "QuoteId": 60,
            "MinPrice": 2546,
            "Direct": false,
            "OutboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-09T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1755
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-09T00:00:00"
            },
            "QuoteDateTime": "2021-03-08T08:55:00"
        },
        {
            "QuoteId": 61,
            "MinPrice": 3672,
            "Direct": true,
            "OutboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 40595,
                "DestinationId": 65368,
                "DepartureDate": "2021-03-31T00:00:00"
            },
            "InboundLeg": {
                "CarrierIds": [
                    1324
                ],
                "OriginId": 65368,
                "DestinationId": 40595,
                "DepartureDate": "2021-04-01T00:00:00"
            },
            "QuoteDateTime": "2021-03-06T22:57:00"
        }
    ],
    "Carriers": [
        {
            "CarrierId": 1859,
            "Name": "Virgin Atlantic"
        },
        {
            "CarrierId": 1467,
            "Name": "Spirit Airlines"
        },
        {
            "CarrierId": 1324,
            "Name": "KLM"
        },
        {
            "CarrierId": 1755,
            "Name": "Turkish Airlines"
        },
        {
            "CarrierId": 1816,
            "Name": "Air Europa"
        },
        {
            "CarrierId": 1793,
            "Name": "United"
        },
        {
            "CarrierId": 870,
            "Name": "jetBlue"
        },
        {
            "CarrierId": 845,
            "Name": "Aeromexico"
        },
        {
            "CarrierId": 1218,
            "Name": "Iberia"
        },
        {
            "CarrierId": 881,
            "Name": "British Airways"
        }
    ],
    "Places": [
        {
            "Name": "Amsterdam",
            "Type": "Station",
            "PlaceId": 40595,
            "IataCode": "AMS",
            "SkyscannerCode": "AMS",
            "CityName": "Amsterdam",
            "CityId": "AMST",
            "CountryName": "Netherlands"
        },
        {
            "Name": "Los Angeles International",
            "Type": "Station",
            "PlaceId": 65368,
            "IataCode": "LAX",
            "SkyscannerCode": "LAX",
            "CityName": "Los Angeles",
            "CityId": "LAXA",
            "CountryName": "United States"
        }
    ],
    "Currencies": [
        {
            "Code": "USD",
            "Symbol": "$",
            "ThousandsSeparator": ",",
            "DecimalSeparator": ".",
            "SymbolOnLeft": true,
            "SpaceBetweenAmountAndSymbol": false,
            "RoundingCoefficient": 0,
            "DecimalDigits": 2
        }
    ],
    "Dates": {
        "OutboundDates": [
            {
                "PartialDate": "2021-03-09",
                "Price": 2546,
                "QuoteDateTime": "2021-03-08T08:55:00",
                "QuoteIds": [
                    60
                ]
            },
            {
                "PartialDate": "2021-03-10",
                "Price": 789,
                "QuoteDateTime": "2021-03-05T19:42:00",
                "QuoteIds": [
                    11,
                    59
                ]
            },
            {
                "PartialDate": "2021-03-11",
                "Price": 789,
                "QuoteDateTime": "2021-03-06T14:23:00",
                "QuoteIds": [
                    16,
                    58
                ]
            },
            {
                "PartialDate": "2021-03-15",
                "Price": 652,
                "QuoteDateTime": "2021-03-07T15:00:00",
                "QuoteIds": [
                    3,
                    17,
                    54,
                    55
                ]
            },
            {
                "PartialDate": "2021-03-19",
                "Price": 789,
                "QuoteDateTime": "2021-03-07T17:48:00",
                "QuoteIds": [
                    18,
                    56
                ]
            },
            {
                "PartialDate": "2021-03-22",
                "Price": 656,
                "QuoteDateTime": "2021-03-04T23:54:00",
                "QuoteIds": [
                    4,
                    19,
                    47,
                    49
                ]
            },
            {
                "PartialDate": "2021-03-24",
                "Price": 433,
                "QuoteDateTime": "2021-03-04T12:20:00",
                "QuoteIds": [
                    2,
                    9,
                    46,
                    50
                ]
            },
            {
                "PartialDate": "2021-03-25",
                "Price": 789,
                "QuoteDateTime": "2021-03-07T17:49:00",
                "QuoteIds": [
                    12,
                    13,
                    20,
                    21,
                    41,
                    44,
                    45,
                    48
                ]
            },
            {
                "PartialDate": "2021-03-26",
                "Price": 661,
                "QuoteDateTime": "2021-03-07T10:46:00",
                "QuoteIds": [
                    5,
                    7,
                    22,
                    51,
                    52,
                    53
                ]
            },
            {
                "PartialDate": "2021-03-27",
                "Price": 789,
                "QuoteDateTime": "2021-03-07T02:32:00",
                "QuoteIds": [
                    14,
                    23,
                    31,
                    40
                ]
            },
            {
                "PartialDate": "2021-03-28",
                "Price": 735,
                "QuoteDateTime": "2021-03-07T02:54:00",
                "QuoteIds": [
                    6,
                    8,
                    15,
                    35,
                    42,
                    43
                ]
            },
            {
                "PartialDate": "2021-03-29",
                "Price": 378,
                "QuoteDateTime": "2021-03-08T10:42:00",
                "QuoteIds": [
                    1,
                    24,
                    25,
                    26,
                    32,
                    36,
                    37,
                    38
                ]
            },
            {
                "PartialDate": "2021-03-30",
                "Price": 789,
                "QuoteDateTime": "2021-03-07T03:24:00",
                "QuoteIds": [
                    27,
                    28,
                    29,
                    33,
                    39,
                    57
                ]
            },
            {
                "PartialDate": "2021-03-31",
                "Price": 757,
                "QuoteDateTime": "2021-03-07T03:35:00",
                "QuoteIds": [
                    10,
                    30,
                    34,
                    61
                ]
            }
        ],
        "InboundDates": [
            {
                "PartialDate": "2021-04-01",
                "Price": 789,
                "QuoteDateTime": "2021-03-07T22:19:00",
                "QuoteIds": [
                    17,
                    20,
                    30,
                    44,
                    54,
                    61
                ]
            },
            {
                "PartialDate": "2021-04-02",
                "Price": 789,
                "QuoteDateTime": "2021-03-07T17:48:00",
                "QuoteIds": [
                    11,
                    18,
                    22,
                    51,
                    56,
                    59
                ]
            },
            {
                "PartialDate": "2021-04-03",
                "Price": 433,
                "QuoteDateTime": "2021-03-04T12:20:00",
                "QuoteIds": [
                    2,
                    4,
                    23,
                    31,
                    46,
                    47
                ]
            },
            {
                "PartialDate": "2021-04-04",
                "Price": 661,
                "QuoteDateTime": "2021-03-07T10:46:00",
                "QuoteIds": [
                    5,
                    6,
                    9,
                    24,
                    27,
                    36,
                    42,
                    50,
                    52,
                    57
                ]
            },
            {
                "PartialDate": "2021-04-05",
                "Price": 789,
                "QuoteDateTime": "2021-03-07T03:10:00",
                "QuoteIds": [
                    19,
                    25,
                    28,
                    37,
                    39,
                    49
                ]
            },
            {
                "PartialDate": "2021-04-06",
                "Price": 789,
                "QuoteDateTime": "2021-03-07T03:24:00",
                "QuoteIds": [
                    15,
                    29,
                    33,
                    35
                ]
            },
            {
                "PartialDate": "2021-04-07",
                "Price": 757,
                "QuoteDateTime": "2021-03-07T03:35:00",
                "QuoteIds": [
                    10,
                    34
                ]
            },
            {
                "PartialDate": "2021-04-09",
                "Price": 2546,
                "QuoteDateTime": "2021-03-08T08:55:00",
                "QuoteIds": [
                    60
                ]
            },
            {
                "PartialDate": "2021-04-10",
                "Price": 737,
                "QuoteDateTime": "2021-03-07T19:17:00",
                "QuoteIds": [
                    7,
                    14,
                    40,
                    53
                ]
            },
            {
                "PartialDate": "2021-04-12",
                "Price": 789,
                "QuoteDateTime": "2021-03-06T14:23:00",
                "QuoteIds": [
                    16,
                    58
                ]
            },
            {
                "PartialDate": "2021-04-13",
                "Price": 789,
                "QuoteDateTime": "2021-03-07T17:49:00",
                "QuoteIds": [
                    21,
                    45
                ]
            },
            {
                "PartialDate": "2021-04-14",
                "Price": 378,
                "QuoteDateTime": "2021-03-08T10:42:00",
                "QuoteIds": [
                    1,
                    32
                ]
            },
            {
                "PartialDate": "2021-04-16",
                "Price": 652,
                "QuoteDateTime": "2021-03-07T15:00:00",
                "QuoteIds": [
                    3,
                    55
                ]
            },
            {
                "PartialDate": "2021-04-18",
                "Price": 739,
                "QuoteDateTime": "2021-03-07T14:57:00",
                "QuoteIds": [
                    8,
                    43
                ]
            },
            {
                "PartialDate": "2021-04-25",
                "Price": 789,
                "QuoteDateTime": "2021-03-04T22:53:00",
                "QuoteIds": [
                    13,
                    41
                ]
            },
            {
                "PartialDate": "2021-04-27",
                "Price": 789,
                "QuoteDateTime": "2021-03-05T21:41:00",
                "QuoteIds": [
                    12,
                    48
                ]
            },
            {
                "PartialDate": "2021-04-29",
                "Price": 789,
                "QuoteDateTime": "2021-03-07T14:30:00",
                "QuoteIds": [
                    26,
                    38
                ]
            }
        ]
    }
}*/