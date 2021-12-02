import React, { Component } from "react";
import styles from "./Dashboard.module.scss";
import NavBar from "../NavBar/Navbar";
import FilterBar from "./FilterBar/FilterBar";
import CountryList from "./CountryList/CountryList";

class Dashboard extends Component {
    constructor(props) {
        super(props)
        /* create a ref for scrolling functionality */
        this.scrollTo = React.createRef(null);
        this.state = {
            filteredCountries: null,
            countrySearchField: "",
            regionFilter: ""
        }
    };

    // update the state whenever the searchfield changes
    onCountrySearchFieldChange = country => {
        this.setState(
            () => ({ countrySearchField: country}),
            this.updateFilteredCountries
        );
    };

    // update region filter based on the dropdown menu's current
    onRegionChange = region => {
        this.setState(
            () => ({ regionFilter: region}),
            this.updateFilteredCountries
        );
    };

    // update the filtered countries list based on the current state
    updateFilteredCountries = () => {
        this.setState((prevState, prevProps) => {
            const { totalCountries } = prevProps;
            const { countrySearchField, regionFilter } = prevState;
            // filter based on searchField
            let filteredCountries = totalCountries.filter(country => {
                return country.name
                    .toLowerCase()
                    .includes(countrySearchField.toLowerCase());
            });
            // filter based on region
            if (regionFilter) {
                filteredCountries = filteredCountries.filter(country => {
                    return country.region.toLowerCase() === regionFilter.toLowerCase();
                });
            }
            return { filteredCountries };
        });
    };

    componentDidCatch() {
        document.title = "Where is the World?";
    }

    render() {
        const { countrySearchField, filteredCountries, regionFilter } = this.state;
        const { totalCountries, homePage } = this.props;
        return (
            <Reac.Fragment>
                <header className={styles.dashboard}>
                    <NavBar 
                        darkMode={this.props.darkMode}
                        appModeChanger={this.props.appModeChanger}
                        homePage={homePage}
                    />
                    <FilterBar />
                </header>
            </Reac.Fragment>
        )
    }
}