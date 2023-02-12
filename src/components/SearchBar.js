import { useEffect, useState } from "react";
import { useCountry } from "../context/UseCountry";
import Select from "react-select";
export default function SearchBar() {
    const { setFilters, countries } = useCountry();
    const [filterByText, setFilterByText] = useState(null);
    const [filterByRegion, setFilterByRegion] = useState(null);
    // setFilters({ text: "japan", region: "asia" });
    const options = [
        { value: "Europe", label: "Europe" },
        { value: "Asia", label: "Asia" },
        { value: "Americas", label: "Americas" },
        { value: "Africa", label: "Africa" },
        { value: "Oceania", label: "Oceania" },
    ];
    const filterByTextFn = (e) => {
        setFilterByText({ text: e.target.value });
        // setFilters(filterBy);
    };

    const filterByRegionFn = (e) => {
        console.log(e);
        setFilterByRegion({ region: e.value });
        // setFilters(filterBy);
    };

    const send = () => {
        setFilters(null);
    };

    useEffect(() => {
        let filter = null;
        if (filterByText) {
            filter = Object.assign(filterByText, filter);
            // setFilters(filter);
        }
        if (filterByRegion) {
            filter = Object.assign(filterByRegion, filter);
        }
        console.log(filter, "**0");
        setFilters(filter);
    }, [filterByText, filterByRegion]);

    return (
        <div>
            <input type="text" onChange={filterByTextFn}></input>
            <Select options={options} onChange={filterByRegionFn} />
            <button onClick={send}>SEARCH</button>
            SearchBar
        </div>
    );
}
