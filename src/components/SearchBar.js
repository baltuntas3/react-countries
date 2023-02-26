import { useCountry } from "../context/UseCountry";
import "../styles/SearchBar.css";

export default function SearchBar() {
    const { setFilters, isDarkMode } = useCountry();
    // text ve region iki state yap, region değiştiğinde text i clear et.
    const options = [
        { value: "", label: "All" },
        { value: "Europe", label: "Europe" },
        { value: "Asia", label: "Asia" },
        { value: "Americas", label: "Americas" },
        { value: "Africa", label: "Africa" },
        { value: "Oceania", label: "Oceania" },
    ];
    const filterByTextFn = (e) => {
        setFilters((prevState) => ({ ...prevState, text: e.target.value }));
    };

    const filterByRegionFn = (e) => {
        setFilters((prevState) => ({ ...prevState, region: e.target.value }));
    };

    // const send = () => {
    //     setFilters({ text: "", region: "" });
    // };
    // useState(() => {
    //     console.log("giris yaptim");
    // }, []);

    return (
        <div className="div90">
            <div className="search-bar-container margin-between-components">
                {isDarkMode ? (
                    <svg className="search-icon light" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                    </svg>
                ) : (
                    <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                    </svg>
                )}

                <input type="text" className="search-input" onChange={filterByTextFn}></input>

                {/* <Select className="search-bar" defaultValue={options[0]} options={options} onChange={filterByRegionFn} /> */}
                <select className="search-input select-item" onChange={filterByRegionFn}>
                    {options.map((item, index) => {
                        return (
                            <option key={index} value={item.value}>
                                {item.label}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>
    );
}
