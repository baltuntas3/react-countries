import { createContext, useContext, useEffect, useState } from "react";
import { getAllCountries } from "../services/ApiService";

export const CountryContext = createContext();

const CountryContextProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        setCountries(getAllCountries());
    }, [isDarkMode, countries]);

    return (
        <CountryContext.Provider value={{ isDarkMode, setIsDarkMode, countries, setCountries }}>
            {children}
        </CountryContext.Provider>
    );
};

export default CountryContextProvider;
export const useCountry = () => useContext(CountryContext);
