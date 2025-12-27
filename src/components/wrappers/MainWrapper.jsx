import Nav from "../layout/Nav";
import FilteringTools from "../filtering/FilteringTools";
import { useState, useEffect } from "react";
import CountriesGrid from "../layout/CountriesGrid";
const API_URL = import.meta.env.VITE_ROOT_API;
import DataSummary from "../layout/DataSummary";

const MainWrapper = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [countriesLoading, setCountriesLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState({ name: "Filter by region", value: "" });
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
  }, [filter]);

  return (
    <>
      <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-100 pb-8">
        <FilteringTools filter={filter} handleChange={setFilter} />

        <main>
          {!countriesLoading && !error && (
            <>
              {filter.value != "" && (
                <DataSummary region={filter.name} data={countriesData} />
              )}
              <CountriesGrid countriesData={countriesData} />
            </>
          )}
          {countriesLoading && <p>loading...</p>}
        </main>
      </div>
    </>
  );
};

export default MainWrapper;
