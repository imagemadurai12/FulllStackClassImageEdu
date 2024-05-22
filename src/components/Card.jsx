import React, { useEffect, useState } from "react";
import "../styles/card.css";
const Card = (props) => {
  let [location, setLocation] = useState([]);
  let [transport, setTransport] = useState(0);

  let getRoute = () => {
    let routesArray = props.sLocation;
    let resultLoc = [];

    const routes = {
      RT101: [
        "Tiruchendur",
        "Tuticorin",
        "Madurai",
        "Trichy",
        "Perungulathur",
        "Chennai",
      ],
      RT102: [
        "Tiruchendur",
        "Tuticorin",
        "Madurai",
        "Karur",
        "Salem",
        "Hosur",
        "Bengaluru",
      ],
      RT103: ["Tirunelveli", "Madurai", "Trichy", "Perungulathur", "Chennai"],
      RT104: ["Tuticorin", "Madurai", "Salem", "Coimbatore"],
      RT105: [
        "Coimbatore",
        "Erode",
        "Salem",
        "Dharmapuri",
        "Hosur",
        "Bengaluru",
      ],
      RT106: [
        "Coimbatore",
        "Erode",
        "Salem",
        "Viluppuram",
        "Tindivanam",
        "Chennai",
      ],
      RT107: ["Goa", "Belgaum", "Kolhapur", "Satara", "Pune", "Mumbai"],
      RT108: ["Mumbai", "Vadodara", "Udaipur", "Jaipur", "New Delhi"],
      RT109: ["Chennai", "Nellore", "Ongole", "Hyderabad"],
      RT110: [
        "Bengaluru",
        "Dharmavaram",
        "Anantapur",
        "Mahbubnagar",
        "Hyderabad",
      ],
      RT201: ["Tuticorin, India", "Chennai, India"],
      RT202: ["Madurai, India", "Chennai, India"],
      RT203: ["Madurai, India", "Bengaluru, India"],
      RT210: ["Chennai, India", "Doha, Qatar"],
      RT211: ["Mumbai, India", "Doha, Qatar"],
      RT212: ["Bengaluru, India", "Doha, Qatar"],
      RT220: ["New Delhi, India", "Dubai, UAE", "New York, USA"],
      RT221: ["Mumbai, India", "Dubai, UAE", "New York, USA"],
      RT222: ["Chennai, India", "Dubai, UAE", "New York, USA"],
      RT230: ["Dubai, UAE", "Port Louis, Singapore"],
      RT231: ["Trichy, India", "Port Louis, Singapore"],
      RT232: ["Chennai, India", "Bali, Indonesia"],
    };

    routesArray.forEach((route) => {
      let opt = [];
      if (props.sType === "Buses" || props.sType === "Hotels") {
        for (let obj in routes) {
          // console.log(obj)
          if (obj === route) {
            opt = routes[obj].map((arr, ind) => <li key={ind}>{arr}</li>);
          }
        }
      } else if (props.sType === "Hotels") {
        opt = <li key={route}>{route}</li>;
      }

      const droping = <ul>{opt}</ul>;
      resultLoc.push(droping);
    });
    setLocation(resultLoc);
    setTransport(resultLoc.length);
  };

  useEffect(() => {
    getRoute();
  }, []);

  return (
    <div className="card-item-container">
      <div className="card-item-sub-container">
        <h1>{props.sName}</h1>
        <p>
          {" "}
          {transport} {props.sType} available
        </p>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default Card;
