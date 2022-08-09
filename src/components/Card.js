import React from "react";
import locationTag from "../images/location-tag.svg";

export default function Card(props) {
    return (
        <div className="travel-card">
            <img src={`images/${props.image}`} alt={`${props.link}-img`} className="img"/>
            <span className="card-text">
                <span className="location">
                    <img src={locationTag} alt="location-img" className="location-tag" />
                    <p> {props.country.split("").join(" ")} </p>
                    <a href={`https://www.google.com/maps/place/${props.link}`}> View on Google Maps </a>
                </span>
                <span className="info-text">
                    <h1> {props.location} </h1>
                    <p> <b> {props.dates} </b> </p> 
                    <p> {props.description} </p>
                </span>
            </span>
        </div>
    );
}