import { useEffect, useState } from "react";
import { getCountryDetails } from "../services/ApiService";
import { Link, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import "../styles/CountryDetails.css";
import "../App.css";
import { formatNumber } from "../utils/Util";
import { useCountry } from "../context/UseCountry";

export default function CountryDetails() {
    const { setFilters } = useCountry();
    const [loading, setLoading] = useState(true);
    const { cca2 } = useParams();
    const [countryDetails, setCountryDetails] = useState({});

    const countryDetailsData = async (code) => {
        setLoading(true);
        const [data, err] = await getCountryDetails(code);
        if (err) return setCountryDetails([err.message]);
        setCountryDetails(data.data[0]);
        setLoading(false);
    };

    const [objStr, setObjStr] = useState({});
    const deneme = {};
    const writeProps = (obj, propName) => {
        if (typeof obj === "object") {
            Object.keys(obj).map((innerProp) => {
                return writeProps(obj[innerProp], propName);
            });
        } else {
            deneme[propName] = deneme[propName] || "";
            deneme[propName] += " " + obj + ", ";
            setObjStr(deneme);
        }
    };

    useEffect(() => {
        countryDetailsData(cca2);
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (!loading) {
            writeProps(countryDetails.name.nativeName, "nativeNames");
            writeProps(countryDetails.currencies, "currencies");
            writeProps(countryDetails.languages, "languages");
        }
        // eslint-disable-next-line
    }, [countryDetails, loading]);

    const clearFilter = () => {
        setFilters({ text: "", region: "" });
    };

    return (
        <>
            <PageHeader></PageHeader>
            <div className="wrapper-container">
                <div className="btn-wrapper margin-between-components">
                    <div className="back-btn-container">
                        <Link className="btn-link" to="/">
                            <button className="back-btn change-mod" onClick={clearFilter}>
                                <svg className="back-btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                                </svg>
                                <span className="back-btn-text">Back</span>
                            </button>
                        </Link>
                    </div>
                </div>

                {!loading ? (
                    <div className="details-container">
                        <div className="detail-column">
                            <img className="flag" alt="bayrak" src={countryDetails.flags.svg}></img>
                        </div>
                        <div className="detail-column">
                            <div className="details-side">
                                <div className="details-title">
                                    <strong className="detail-title">{countryDetails.name.common}</strong>
                                </div>
                                <div className="column1 detail-font">
                                    <p className="country-detail">
                                        <strong>Native Name(s):</strong>
                                        {objStr?.nativeNames?.slice(0, objStr?.nativeNames.length - 2)}
                                    </p>
                                    <p className="country-detail">
                                        <strong>Population:</strong> {formatNumber(countryDetails.population)}
                                    </p>
                                    <p className="country-detail">
                                        <strong>Region:</strong> {countryDetails.region}
                                    </p>
                                    <p className="country-detail">
                                        <strong>Sub Region:</strong> {countryDetails.subregion}
                                    </p>
                                    <p className="country-detail">
                                        <strong>Capital:</strong> {countryDetails.capital?.join(",")}
                                    </p>
                                </div>
                                <div className="column2 detail-font">
                                    <p className="country-detail">
                                        <strong>Top Level Domain:</strong> {countryDetails.tld?.join(",")}
                                    </p>
                                    <p className="country-detail">
                                        <strong>Currencies:</strong>
                                        {objStr?.currencies?.slice(0, objStr?.currencies.length - 2)}
                                    </p>
                                    <p className="country-detail">
                                        <strong>Languages:</strong>
                                        {objStr?.languages?.slice(0, objStr?.languages.length - 2)}
                                    </p>
                                </div>
                                <div className="">
                                    <p className="country-detail">
                                        <strong>Borders:</strong>
                                        {countryDetails.borders?.map((border, key) => {
                                            return (
                                                <span className="detail-border" key={key}>
                                                    {border}
                                                </span>
                                            );
                                        })}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>Yükleniyor...</div>
                )}
            </div>
        </>
    );
}
