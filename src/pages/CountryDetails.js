import { useEffect, useState } from "react";
import { getCountryDetails } from "../services/ApiService";
import { Link, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import "../styles/CountryDetails.css";
import "../App.css";

export default function CountryDetails() {
    const [loading, setLoading] = useState(false);
    const { cca2 } = useParams();
    const [countryDetails, setCountryDetails] = useState({});

    const countryDetailsData = async (code) => {
        setLoading(true);
        console.log(cca2);
        const [data, err] = await getCountryDetails(code);
        if (err) return setCountryDetails([err.message]);
        setCountryDetails(data.data[0]);
        setLoading(false);
    };

    useEffect(() => {
        countryDetailsData(cca2);
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        console.log(countryDetails, "-->", loading);
    }, [countryDetails, loading]);

    return (
        <>
            <PageHeader></PageHeader>

            <div className="btn-wrapper margin-between-components">
                <div className="back-btn-container">
                    <button className="back-btn">
                        <Link className="btn-link" to="/">
                            <svg className="back-btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                            </svg>
                            <p className="btn-text">Back</p>
                        </Link>
                    </button>
                </div>
            </div>

            {!loading ? (
                <div className="div90">
                    <div className="details-container">
                        <div className="flag-side">
                            <img className="flag" alt="bayrak" src={countryDetails?.flags?.svg}></img>
                        </div>
                        <div className="details-side">
                            <div className="details-title">
                                <strong>Title</strong>
                            </div>
                            <div className="column1">
                                <p className="country-detail">
                                    <strong>Native Name(s):</strong>
                                </p>
                                <p className="country-detail">
                                    <strong>Population:</strong> {countryDetails?.population}
                                </p>
                                <p className="country-detail">
                                    <strong>Region:</strong> {countryDetails?.region}
                                </p>
                                <p className="country-detail">
                                    <strong>Sub Region:</strong>
                                </p>
                                <p className="country-detail">
                                    <strong>Capital:</strong>
                                </p>
                            </div>
                            <div className="column2">
                                <p className="country-detail">
                                    <strong>Top Level Domain:</strong>
                                </p>
                                <p className="country-detail">
                                    <strong>Currencies:</strong>
                                </p>
                                <p className="country-detail">
                                    <strong>Languages:</strong>
                                </p>
                            </div>
                            <div className="">
                                <p className="country-detail">
                                    <strong>Borders:</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>Yükleniyor...</div>
            )}
        </>
    );
}
