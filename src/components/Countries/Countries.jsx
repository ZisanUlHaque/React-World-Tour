import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {

    const[visitedCountries, setVisitedCountries] = useState([]);


    const handleVisitedCountires = (country) =>{
        const newVisitedCountries = [...visitedCountries , country];
        setVisitedCountries(newVisitedCountries);
    }

  const contriesData = use(countriesPromise);
  const contries = contriesData.countries;
  
  return (
    <div>
      <h1>Let's World Tour Together...</h1>
      <h3>Total Country Visited: {visitedCountries.length}</h3>
      <ol>
        {
          visitedCountries.map(country => <li>{country.name.common}</li>)
        }
      </ol>
      <div id="countries">
        {contries.map((country) => (
          <Country country={country} handleVisitedCountires = {handleVisitedCountires}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
