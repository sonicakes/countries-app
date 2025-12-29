import { useState, useEffect } from "react";
import ModalImage from "react-modal-image";
const API_KEY = import.meta.env.VITE_GOOGLE_KEY;
const API_URL = import.meta.env.VITE_ROOT_API;
import { Link } from "react-router";

const CountryDetail = ({ country, mode }) => {
  const langCode = country && Object.keys(country.name.nativeName)[0];
  const nativeName = country && country.name.nativeName[langCode].common;
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    const fetchBorderCountries = async () => {
      try {
        const res = await fetch(
          `${API_URL}/alpha?codes=${country.borders.join(",")}`
        );
        if (!res.ok) throw new Error("error border country");
        const data = await res.json();
        const borderNames = data.map((country) => country.name.common);
        setBorderCountries(borderNames);
        console.log(borderNames);
      } catch (err) {
        // setError(err);
      } finally {
        // setLoading(false);
      }
    };
    fetchBorderCountries();
  }, []);
  return (
    <div className= {`${mode==="light" ? 'text-grey-950' : 'text-white'} text-sm flex flex-wrap md:flex-nowrap pt-10 gap-5 md:gap-10 lg:gap-15`}
>
      <div className="w-full w-1/2">
        <img
          src={country.flags.svg}
          alt={country.flags.alt}
          className="w-full aspect-[16/9] object-cover"
        />
        <div className="mt-3 rounded-lg p-3 flex gap-3">
          <ModalImage
            className={`${mode==="light" ? 'hover:bg-hover-card-light' : 'hover:bg-hover-card-dark '} border-teal-primary/50 transition-all aspect-square object-cover border p-2 h-30 rounded-lg border-teal-primary`}
            small={country.coatOfArms.svg}
            large={country.coatOfArms.svg}
            alt="coat of arms"
          />
          <ModalImage
            small={`https://maps.googleapis.com/maps/api/staticmap?center=${country.name.common}&zoom=5&size=300x300&key=${API_KEY}`}
            large={`https://maps.googleapis.com/maps/api/staticmap?center=${country.name.common}&zoom=5&size=500x500&scale=2&key=${API_KEY}`}
            alt="Location Map"
            className={`${mode==="light" ? 'hover:bg-hover-card-light' : 'hover:bg-hover-card-dark '} border-teal-primary/50 transition-all aspect-square object-cover border p-2 h-30 rounded-lg border-teal-primary`}
          />
        </div>
      </div>
      <div className="relative z-20 w-full w-1/2">
        <h1 className="font-extrabold text-3xl">{country?.name?.common}</h1>
        <div className="flex md:flex-wrap lg:flex-nowrap gap-2 lg:gap-4 pt-5">
          <div className="w-1/2">
            <div className="leading-7">
              <span className="font-bold pr-2">Native name:</span>
              {nativeName && nativeName}
            </div>
            <div className="leading-7">
              <span className="font-bold pr-2">Population:</span>
              {country.population && country.population.toLocaleString()}
            </div>
            <div className="leading-7">
              <span className="font-bold pr-2">Region:</span>
              {country.region && country.region}
            </div>
            <div className="leading-7">
              <span className="font-bold pr-2">Sub Region:</span>
              {country.subregion && country.subregion}
            </div>
            <div className="leading-7">
              <span className="font-bold pr-2">Capital:</span>
              {country.capital && country.capital}
            </div>
          </div>
          <div className="w-1/2">
            <div className="leading-8">
              <span className="font-bold pr-2">Top Level Domain:</span>
              {country && country.tld}
            </div>
            <div className="leading-7">
              <span className="font-bold pr-2">Currencies:</span>
              {Object.entries(country?.currencies || {}).map(
                ([code, details], index, array) => (
                  <span key={details.name}>
                    {details.symbol} {details.name} ({code})
                    {index < array.length - 1 ? ", " : ""}
                  </span>
                )
              )}
            </div>
            <div className="leading-7">
              <span className="font-bold pr-2">Languages:</span>
              {Object.entries(country?.languages || {}).map(
                ([language, val], index, array) => (
                  <span key={language}>
                    {val}
                    {index < array.length - 1 ? ", " : ""}
                  </span>
                )
              )}
            </div>
            <div>
              <span className="font-bold pr-2 leading-7">
                Driving cars side:
              </span>
              {country.car && country.car.side}
            </div>
          </div>
        </div>
        {borderCountries.length > 0 && (
          <div className="flex pt-5 flex-wrap leading-7">
            <span className="font-bold pr-2 pb-2">Border Countries:</span>
            <div className="flex gap-2 flex-wrap">
              {borderCountries.map((country, index) => (
                <Link to={`/country/${country}`} key={index}>
                  <div
                    className={`${mode==="light" ? 'hover:bg-hover-card-light' : 'bg-blue-900 hover:bg-hover-card-dark '} px-3  transition-all rounded-lg shadow-[0_0_15px_5px_rgba(0,0,0,0.1)]`}
                  >
                    {country}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryDetail;
