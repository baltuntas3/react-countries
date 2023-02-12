import "../styles/CountryCard.css";
export default function CountryCard({ country }) {
    // const capital = country.altSpellings.join(",");
    // console.log(capital);

    // Capital:{" "}
    // {country.altSpellings.map((capital, index) => (
    //     <span key={index}>{capital},</span>
    // ))}
    // console.log(country);

    return (
        <div className="country-container">
            <div className="country-flag">
                <img className="img-flag" src={country.flags.svg} alt="a"></img>
            </div>
            <div className="country-title">
                <p>{country.name.official}</p>
            </div>
            <div className="country-description">
                <p className="country-detail">Population: {country.population}</p>
                <p className="country-detail">Region: {country.region}</p>
                <p className="country-detail">Capital: {country.capital}</p>
            </div>
        </div>
    );
}
