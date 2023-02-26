import { createContext, useContext, useEffect, useState } from "react";
import { getAllCountries } from "../services/ApiService";

export const CountryContext = createContext();

const CountryContextProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState({ text: "", region: "" });

    const getAllCountriesData = async () => {
        setLoading(true);
        const [data, err] = await getAllCountries();
        if (err) return setCountries([err.message]);
        setCountries(data.data);
        setFilteredCountries(data.data);
        setLoading(false);
    };

    document.body.classList.add("app");

    if (isDarkMode) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }

    useEffect(() => {
        const regexp = new RegExp(filters?.text, "ig");

        let result = countries.filter(
            (country) => country.name.common.match(regexp) || country.name.official.match(regexp)
        );

        if (filters.region) result = result.filter((country) => country.region === filters.region);
        setFilteredCountries(result);
        // eslint-disable-next-line
    }, [filters]);

    useEffect(() => {
        getAllCountriesData();
    }, []);

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
