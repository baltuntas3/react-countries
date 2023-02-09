import { useCountry } from "../context/CountryContext";
import "../styles/PageHeader.css";
export default function PageHeader() {
    const { isDarkMode, setIsDarkMode } = useCountry();
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <div className="header-container">
            <div className="header-title">Where in The World?</div>
            <button type="button" onClick={toggleDarkMode}>
                Simge
            </button>
            <p>Dark Mode</p>
        </div>
    );
}
