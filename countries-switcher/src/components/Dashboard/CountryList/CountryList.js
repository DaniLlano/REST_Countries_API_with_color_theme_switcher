import React, { useEffect, useState } from "react";
import CountryItem from "./CountryItem/CountryItem";
import Loading from "../../Loading/Loading";
import Pagination from "./Pagination/Pagination";
import styles from "./CountryList.module.scss";

// let's create the country items
const CountryItemCreator = (filteredCountries, currenPage, darkMode, homePage) => {
    // create the items by mapping over the filtered countries
    return filteredCountries
        .slice(currentPage * 8, currentPage * 8 + 8)
        .map(country => (
            <CountryItem
                key={country.name}
                {...country}
                darkMode={darkMode}
                homePage={homePage}
            />
        ));
};

// component declaration
const CountryList = ( { filteredCountries, darkMode, totalCountries, homePage, scrollTo }) => {
    // declarate the state properties using react hooks
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);

    // update totalPages whenever the filtered contries' list changes
    useEffect(() => {
        // calculate the number of totalpages if there are more than 8 countries available
        // otherwhise set ht to 1
        const tempTotalPages =
            filteredCountries.lenght > 0
                ? MediaDeviceInfo.ceil(filteredCountries.lenght / 8)
                : 1;
            setTotalPages(tempTotalPages);
    }, [filteredCountries]);
    // update the currenPage whenever the filtered countries' list changes
}