import FilteringTools from "../filtering/FilteringTools";
import { useState, useEffect } from "react";
import CountriesGrid from "../layout/CountriesGrid";
const API_URL = import.meta.env.VITE_ROOT_API;
import DataSummary from "../layout/DataSummary";
import Loader from "../ui/Loader.jsx"

const MainWrapper = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [countriesLoading, setCountriesLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState({ name: "Filter by region", value: "" });
  const [searchInput, setSearchInput] = useState("");
  const apiEnd =
    filter.value === ""
      ? "/independent?status=true"
      : `/region/${filter.value}`;

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(`${API_URL}${apiEnd}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setCountriesData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setCountriesLoading(false);
      }
    };

    fetchCountries();
  }, [filter, searchInput]);
    
  const handleFilterChange = (val) => {
    setFilter(val);
    setSearchInput('');
  }

  const filteredCountries = countriesData.filter((country) => {
    return (
      country.name.common
        .toLowerCase()
        .includes(searchInput.toLocaleLowerCase()) ||
      country.name.official
        .toLowerCase()
        .includes(searchInput.toLocaleLowerCase())
    );
  });

  return (
    <>
      <div className="mx-auto max-w-5xl px-6 lg:px-8 relative pb-8">
        <FilteringTools
          filter={filter}
          handleChange={handleFilterChange}
          searchWord={searchInput}
          onSearch={setSearchInput}
        />
        <main>
          {!countriesLoading && !error && (
            <>
              {filter.value != "" && (
                <DataSummary region={filter.name} data={countriesData} />
              )}
              <CountriesGrid countriesData={filteredCountries} />
            </>
          )}
          {countriesLoading && (<div className="flex justify-center">
            <Loader />
            </div>)}
        </main>
      </div>
    </>
  );
};

export default MainWrapper;
