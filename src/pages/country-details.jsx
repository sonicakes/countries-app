import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_ROOT_API;

const CountryDetailsPage = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch(`${API_URL}/name/${name}`);
        if (!res.ok) throw new Error("error fetching deets");
        const data = await res.json();
        setCountry(data[0]);
        console.log(data[0]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCountry();
  }, [name]);

  const cioc = country && country.cioc.toLowerCase();
  const langCode = country && Object.keys(country.name.nativeName)[0];
  const nativeName = country && country.name.nativeName[langCode].common;

  // Loop through each currency entry
  return (
    <>
      <div className="coin-details-container">
        <Link to="/">Back to home</Link>
        {/* {loading && <Spinner />} */}
        {loading && <p>loading...</p>}
        {error && <p className="error">{error}</p>}
        {!loading && !error && (
          <>
            <div>
              <h1 className="font-bold text-2xl">{country?.name?.common}</h1>
              <div className="flex gap-2">
                <div>
                  <div>
                    <span className="font-bold pr-2">Native name:</span>
                    {nativeName && nativeName}
                  </div>
                  <div>
                    <span className="font-bold pr-2">Population:</span>
                    {country.population && country.population.toLocaleString()}
                  </div>
                  <div>
                    <span className="font-bold pr-2">Region:</span>
                    {country.region && country.region}
                  </div>
                  <div>
                    <span className="font-bold pr-2">Sub Region:</span>
                    {country.subregion && country.subregion}
                  </div>
                  <div>
                    <span className="font-bold pr-2">Capital:</span>
                    {country.capital && country.capital}
                  </div>
                </div>
                <div>
                  <div>
                    <span className="font-bold pr-2">Top Level Domain:</span>
                    {country && country.tld}
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold">Currencies:</span>
                    {Object.entries(country?.currencies || {}).map(
                      ([code, details], index, array) => (
                        <div key={details.name}>
                          <span>
                            {details.symbol} {details.name} ({code})
                            {index < array.length - 1 ? ", " : ""}
                          </span>
                        </div>
                      )
                    )}
                  </div>

                  <div>
                    <span className="font-bold pr-2">
                      Driving cars - which side:
                    </span>
                    {country.car && country.car.side}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CountryDetailsPage;
