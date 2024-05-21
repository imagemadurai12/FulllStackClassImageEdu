import React, { useState } from "react";
import Widget from "./components/Widget";
import Card from "./components/Card";
import "./styles/app.css";
import axios from "axios";

const App = () => {
  let [result, setResult] = useState([]);
  let [category, setCategory] = useState([]);

  function handleSubmit(selectedCategory, searchQuery) {
    // console.log(selectedCategory)
    // console.log(searchQuery)
    makeAxaxCall(selectedCategory, searchQuery);
  }

  const makeAxaxCall = (selectedCategory, searchQuery) => {
    let updateResult = [];
    let updatecategory = [];
    axios
      .get("bookmytrip-service.json")
      .then((response) => {
        // console.log(response.data[selectedCategory])
        if (selectedCategory !== "All") {
          let travelService = response.data[selectedCategory];

          travelService.forEach((element) => {
            if (
              element.serviceName
                .toLowerCase()
                .search(searchQuery.toLowerCase()) !== -1
            ) {
              updateResult.push(element);
              updatecategory.push(selectedCategory);
            }
          });
          setResult(updateResult);
          setCategory(updatecategory);
          console.log(result);
          console.log(category);
          // console.log(updateResult)
        } else {
          alert("You selected all categories");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <header>
        <Widget onSubmit={handleSubmit} />
      </header>
      <main>
        {result.map((res, ind) => {
          console.log(res.serviceID);
          console.log(res.serviceName);
          console.log(category[ind]);
          console.log(res.locations);
          <Card
            key={res.serviceID}
            sName={res.serviceName}
            sType={category[ind]}
            sLocation={res.locations}
          />;
        })}
      </main>

      {/* <Card/> */}
    </>
  );
};

export default App;
