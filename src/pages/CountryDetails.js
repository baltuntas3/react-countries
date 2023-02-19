import { useEffect, useState } from "react";
import { getCountryDetails } from "../services/ApiService";
import { useParams } from "react-router-dom";
export default function CountryDetails() {
    const [countryDetails, setCountryDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const { cca2 } = useParams();

    const countryDetailsData = async (code) => {
        setLoading(true);
        console.log(cca2);
        const [data, err] = await getCountryDetails(code);
        if (err) return setCountryDetails([err.message]);
        setCountryDetails(data.data);
        console.log(countryDetails, "-->", data.data);
        setLoading(false);
    };

    useEffect(() => {
        countryDetailsData(cca2);
    }, []);

    return <div>{cca2}</div>;
}
