import React from 'react';

export default function FlightRow({flight}){
  const hours = Math.floor(flight.duration / 60);
  const mins = flight.duration % 60;
  return (
    <div className="flight-row">
      <div className="left">
        <img src={flight.logo} alt={flight.airline} className="logo" />
        <div className="airline-info">
          <div className="airline-name">{flight.airline}</div>
          <div className="dates">
            <div>Departure: <span>{flight.departureDate} - {flight.departure}</span></div>
            <div>Arrival: <span>{flight.arrivalDate} -{flight.arrival}</span></div>
          </div>
        </div>
      </div>

      <div className="middle">
        <div className="times">
          <div className="time-left">
            <div className="time">{flight.departure}</div>
            <div className="airport">{flight.from}</div>
          </div>
          <div className="route">
            <div className="dots" />
            <div className="duration">{hours}h {mins}m</div>
            <div className="dots" />
          </div>
          <div className="time-right">
            <div className="time">{flight.arrival}</div>
            <div className="airport">{flight.to}</div>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="original">KWD {flight.originalPrice || flight.price }</div>
        <div className="price">KWD {flight.price}.000</div>
        <div className="refundable">Refundable</div>
        <button className="select">Select +</button>
        <button className="details">Flight Details</button>
      </div>
    </div>
  )
}
