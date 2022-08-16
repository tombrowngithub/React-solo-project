import React from "react";
import locationDot from '../images/location-dot.svg'

export default function CardView(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} alt=""/>
            <div className="card-content">
                <div className="location">
                    <span><h3>{props.location} <a href={props.googleMapUrl}>View on Google Map</a></h3></span>
                </div>
                <div className="title">
                    <h2>{props.title}</h2>
                </div>
                <div className="date-para">
                    <span><h4>{props.startDate} - {props.endDate}</h4></span>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}
