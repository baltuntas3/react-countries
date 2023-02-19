import { Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./pages/Index";
import CountryDetails from "./pages/CountryDetails";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Index></Index>}></Route>
            <Route path="/country-details/:cca2" element={<CountryDetails></CountryDetails>}></Route>
        </Routes>
    );
}

export default App;
