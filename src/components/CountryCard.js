import "../styles/CountryCard.css";
export default function CountryCard({ country }) {
    return (
        <div className="country-container">
            <div className="country-flag">
                <img className="img-flag" src={country.flags.svg} alt="a"></img>
            </div>
            <div className="country-title">
                <p>{country.name}</p>
            </div>
            <div className="country-description">
                <p className="country-detail">Population: {country.population}</p>
                <p className="country-detail">Region: {country.region}</p>
                <p className="country-detail">Capital: {country.capital}</p>
            </div>
        </div>
    );
}
