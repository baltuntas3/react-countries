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

    // return countryData;
};

const getAllCountriesByRegion = async (region) => {
    try {
        const data = await axiosInstance.get(`https://restcountries.com/v3.1/region/${region}`);
        return [data, undefined];
    } catch (err) {
        return [undefined, err];
    }
};

export { getAllCountries, getAllCountriesByRegion };
