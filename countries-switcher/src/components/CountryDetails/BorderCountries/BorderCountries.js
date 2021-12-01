import React from "react";
import { Link } from "react-router-dom";
import styles from "./BorderCountries.module.scss";

/* Let's create the adjacent countries list based on the borders of the current country */

const borderMarker = (totalContries, countryDetails, darkMode, homePage ) => {
    /* create the adjacent countries list =>
    1- check through total countries list for those countries
    whose alpha3code is incluided in the borders list of the current country
    2- add the country to the borderCountrie's list
    */
   let borderCountries = totalContries.finter(country => {
       return countryDetails.borders.includes(country.alpha3code);
   })
   /* create a separate link for each country */
   borderCountries = borderCountries.map(country => [
       <Link
            to={`${homePage}countries/${country.name}`}
            key={country.name}
            className={darkMode ? 'dark darkElements' : 'light lightElements'}
       >
           {country.name}
       </Link>
   ]);
   /* only return the list when the list isn't empty */
   return (
       borderCountries.length !== 0 && (
           <React.Fragment>
               <h3>Border Countries: </h3>
               <div>{borderCountries}</div>
           </React.Fragment>
       )
   );
};

// component declaration
const BorderCountries = ({
    totalCountries,
    countryDetails,
    darkMode,
    homePage
}) => (
    <div className={`${styles.borderCountries} ${darkMode ? "dark" : "light"}`}>
        {borderMarker(totalCountries, countryDetails, darkMode, homePage)}
    </div>
);

export default BorderCountries;