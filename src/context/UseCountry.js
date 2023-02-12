import { createContext, useContext, useEffect, useState } from "react";
import { getAllCountries, getAllCountriesByRegion } from "../services/ApiService";

export const CountryContext = createContext();

const CountryContextProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState(null);
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState(null);
    //name filtering

    const getAllCountriesData = async () => {
        setLoading(true);
        const [data, err] = await getAllCountries();
        if (err) return setCountries([err.message]);
        console.log(data.data);
        setCountries(data.data);
        setLoading(false);
    };

    const getAllCountriesByRegionData = async (region) => {
        setLoading(true);
        const [data, err] = await getAllCountriesByRegion(region);
        if (err) return setCountries([err.message]);
        console.log(data.data, "filtered");
        setCountries(data.data);
        setLoading(false);
    };

    useEffect(() => {
        getAllCountriesData();
    }, []);

    useEffect(() => {
        console.log(filteredCountries, "-***-");
        if (filters) {
            let result = null;
            if (filters.region) {
                getAllCountriesByRegionData(filters.region);
                // result = countries.filter((country) => country.region == filters.region);
                // setFilteredCountries(result);
            }
            const regexp = new RegExp(filters.text, "ig");
            result = countries.filter(
                (country) => country.name.common.match(regexp) || country.name.official.match(regexp)
            );
            console.log(result, "--doş");

            setFilteredCountries(result);
        }
    }, [filters]);

    return (
        <CountryContext.Provider
            value={{
                isDarkMode,
                setIsDarkMode,
                countries,
                setCountries,
                loading,
                setFilters,
                filters,
                filteredCountries,
            }}
        >
            {children}
        </CountryContext.Provider>
    );
};

export default CountryContextProvider;
export const useCountry = () => useContext(CountryContext);
