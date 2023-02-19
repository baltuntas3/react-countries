// import countryData from "./data.json";
import { axiosInstance } from "../configs/Axios";
//https://restcountries.com/v3.1/all

const getAllCountries = async () => {
    try {
        const data = await axiosInstance.get("https://restcountries.com/v3.1/all");
        return [data, undefined];
    } catch (err) {
        return [undefined, err];
    }
};
//https://restcountries.com/v2/alpha/{alpha2Code}

const getCountryDetails = async (cca2) => {
    try {
        const data = await axiosInstance.get(`https://restcountries.com/v3.1/alpha/${cca2}`);
        return [data, undefined];
    } catch (err) {
        return [undefined, err];
    }
};
export { getAllCountries, getCountryDetails };
