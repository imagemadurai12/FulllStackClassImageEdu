import React, { useCallback, useState } from "react";
import "../styles/widget.css";
const Widget = ({onSubmit}) => {
  // const [selectTravel, setSelectTravel] = useState("");
  const [openTravel, setOpenTravel] = useState(false);
  const [selectedCategory,setSelectedCategory]=useState('All');
  const [searchQuery,setSearchQuery]=useState('');


  const ShowCategory = ()=>{
   setOpenTravel(true)
  }
  const CloseCategory = ()=>{
    setOpenTravel(false)
   }
  return (
    <>
      <div className="card-container">
        <div className="search-bar-container">
          <input
            type="text"
            onClick={ShowCategory}
            onChange={(e)=>setSearchQuery(e.target.value)}
            placeholder="Search for the bus service flight service or hotel"
          />
          <input
            type="submit"
            onClick={() => {
              onSubmit(selectedCategory,searchQuery); CloseCategory();}}
            value={"Search"}
          />
        </div>
        {openTravel && (
          <div className="travel-packages">
            <h1>{selectedCategory}</h1>
            <div className="travel-mode">
              <input
                type="radio"
                name="travel"
                onChange={(e) => setSelectedCategory(e.target.value)}
                value={"Buses"}
                id="bus"
              />
              <label htmlFor="bus">Buses</label>
            </div>
            <div className="travel-mode">
              <input
                type="radio"
                name="travel"
                onChange={(e) => setSelectedCategory(e.target.value)}
                value={"Flights"}
                id="flight"
              />
              <label htmlFor="flight">Flights</label>
            </div>
            <div className="travel-mode">
              <input
                type="radio"
                name="travel"
                onChange={(e) => setSelectedCategory(e.target.value)}
                value={"Hotels"}
                id="Hotels"
              />
              <label htmlFor="Hotels">Hotels</label>
            </div>
            <div className="travel-mode">
              <input
                type="radio"
                name="travel"
                onChange={(e) => setSelectedCategory(e.target.value)}
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
