import "../App.css";
import CountryCard from "../components/CountryCard";
import PageFooter from "../components/PageFooter";
import SearchBar from "../components/SearchBar";
import PageHeader from "../components/PageHeader";
import { useCountry } from "../context/UseCountry";

export default function Index() {
    const { loading, filteredCountries } = useCountry();
    return (
        <>
            <PageHeader></PageHeader>
            <SearchBar></SearchBar>
            <div className="div90">
                <div className="country-card">
                    {!loading ? (
                        filteredCountries.length ? (
                            filteredCountries.map((country, index) => (
                                <CountryCard key={index} country={country}></CountryCard>
                            ))
                        ) : (
                            <div>Aradığınız sonuç maalesef bulunamadı.</div>
                        )
                    ) : (
                        <div>Yükleniyor...</div>
                    )}
                </div>
            </div>
            <PageFooter></PageFooter>
        </>
    );
}
