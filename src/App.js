import "./App.css";
import CountryCard from "./components/CountryCard";
import PageFooter from "./components/PageFooter";
import SearchBar from "./components/SearchBar";
import PageHeader from "./components/PageHeader";
import { useCountry } from "./context/UseCountry";

function App() {
    const { isDarkMode, countries, loading, filteredCountries } = useCountry();

    return (
        <div className={isDarkMode ? "dark-mode app" : "app"}>
            <PageHeader></PageHeader>
            <SearchBar></SearchBar>
            <div className="country-card">
                {!loading ? (
                    filteredCountries ? (
                        filteredCountries.map((country, index) => (
                            <CountryCard key={index} country={country}></CountryCard>
                        ))
                    ) : (
                        countries.map((country, index) => <CountryCard key={index} country={country}></CountryCard>)
                    )
                ) : (
                    <div>Yükleniyor...</div>
                )}
            </div>
            <PageFooter></PageFooter>
        </div>
    );
}

export default App;
