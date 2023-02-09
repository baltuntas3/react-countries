import "./App.css";
import CountryCard from "./components/CountryCard";
import PageFooter from "./components/PageFooter";
import SearchBar from "./components/SearchBar";
import PageHeader from "./components/PageHeader";
import { useCountry } from "./context/CountryContext";

function App() {
    const { isDarkMode, countries } = useCountry();
    return (
        <div className={isDarkMode ? "dark-mode app" : "app"}>
            <PageHeader></PageHeader>
            <SearchBar></SearchBar>
            <div className="country-card">
                {countries.map((country) => (
                    <CountryCard key={country.name} country={country}></CountryCard>
                ))}
            </div>
            <PageFooter></PageFooter>
        </div>
    );
}

export default App;
