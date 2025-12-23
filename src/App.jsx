import Nav from "./components/layout/Nav";
import map from "./assets/map.png";
import FilteringTools from "./components/filtering/FilteringTools";
import { useState, useEffect } from "react";
import CountriesGrid from "./components/layout/CountriesGrid";

const App = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [countriesLoading, setCountriesLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/independent?status=true`
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        console.log(data);
        setCountriesData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setCountriesLoading(false);
      }
    };

    fetchCountries();
  }, []);
  return (
    <>
      <div className="relative min-h-screen bg-grey-50">
        <header className="bg-white relative z-100 shadow-md">
          <div className="mx-auto max-w-5xl px-6 lg:px-8 ">
            <Nav />
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-100 pb-8">
          <FilteringTools />

          {/* 
            <CountriesGrid /> 
          */}

          <main>
            {!countriesLoading && !error && (
           <CountriesGrid countriesData={countriesData}/>
            )}
            {countriesLoading && <p>loading...</p>}
          </main>
        </div>
        <img
          src={map}
          className="absolute w-full h-full inset-0 z-50 opacity-15 object-cover"
        />
      </div>
    </>
  );
};

export default App;
