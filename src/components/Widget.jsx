import React, { useCallback, useState } from "react";
import "../styles/widget.css";
const Widget = () => {
  const [selectTravel, setSelectTravel] = useState("");
  const [openTravel, setOpenTravel] = useState(false);

  return (
    <>
      <div className="card-container">
        <div className="search-bar-container">
          <input
            type="text"
            onClick={() => setOpenTravel(true)}
            placeholder="Search for the bus service flight service or hotel"
          />
          <input
            type="submit"
            onClick={() => setOpenTravel(false)}
            value={"Search"}
          />
        </div>
        {openTravel && (
          <div className="travel-packages">
            <h1>{selectTravel}</h1>
            <div className="travel-mode">
              <input
                type="radio"
                name="travel"
                onChange={(e) => setSelectTravel(e.target.value)}
                value={"Buses"}
                id="bus"
              />
              <label htmlFor="bus">Buses</label>
            </div>
            <div className="travel-mode">
              <input
                type="radio"
                name="travel"
                onChange={(e) => setSelectTravel(e.target.value)}
                value={"Flights"}
                id="flight"
              />
              <label htmlFor="flight">Flights</label>
            </div>
            <div className="travel-mode">
              <input
                type="radio"
                name="travel"
                onChange={(e) => setSelectTravel(e.target.value)}
                value={"Hotels"}
                id="Hotels"
              />
              <label htmlFor="Hotels">Hotels</label>
            </div>
            <div className="travel-mode">
              <input
                type="radio"
                name="travel"
                onChange={(e) => setSelectTravel(e.target.value)}
                value={"All"}
                id="All"
              />
              <label htmlFor="All">All</label>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Widget;
