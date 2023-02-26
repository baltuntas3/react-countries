import "../styles/CountryCard.css";
import { useCountry } from "../context/UseCountry";
import { Link } from "react-router-dom";

export default function CountryCard({ country }) {
    const { loading } = useCountry();
    return (
        <Link to={`/country-details/${country.cca2}`} className="link">
            <div
                className={
                    !loading
                        ? "country-container country margin-between-components"
                        : "country-container img-loaded margin-between-components"
                }
            >
                <div className="img-div">
                    <img className="img-flag" src={country.flags.svg} alt="a"></img>
                </div>
                <div className="country-title">
                    <h3>{country.name.official}</h3>
                </div>
                <div className="country-description">
                    <p className="country-detail">
                        <strong>Population:</strong> {country.population}
                    </p>
                    <p className="country-detail">
                        <strong>Region:</strong> {country.region}
                    </p>
                    <p className="country-detail">
                        <strong>Capital:</strong> {country.capital}
                    </p>
                </div>
            </div>
        </Link>
    );
}
