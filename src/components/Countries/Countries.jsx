import React, { use } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const contriesData = use(countriesPromise);
  const contries = contriesData.countries;
  console.log(contries);

  return (
    <div>
      <h1>Let's World Tour Together...</h1>
      <div id="countries">
        {contries.map((country) => (
          <Country country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
