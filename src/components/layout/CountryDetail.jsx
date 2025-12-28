import ModalImage from "react-modal-image";
const API_KEY = import.meta.env.VITE_GOOGLE_KEY;
import map from "../../assets/map.png";

const CountryDetail = ({ country }) => {
  const langCode = country && Object.keys(country.name.nativeName)[0];
  const nativeName = country && country.name.nativeName[langCode].common;
  return (
    <div className="text-sm flex flex-wrap md:flex-nowrap text-grey-950 pt-10 gap-5 md:gap-10 lg:gap-15">
      <div className="w-full w-1/2">
        <img
          src={country.flags.svg}
          alt={country.flags.alt}
          className="w-full aspect-[16/9] object-cover"
        />
        <div className="mt-3 rounded-lg p-3 flex gap-3">
          <ModalImage
            className="h-30 border p-2 aspect-square object-cover rounded-lg border-grey-400/80 hover:bg-hover-card-light transition-all"
            small={country.coatOfArms.svg}
            large={country.coatOfArms.svg}
            alt="coat of arms"
          />
          <ModalImage
            small={`https://maps.googleapis.com/maps/api/staticmap?center=${country.name.common}&zoom=5&size=300x300&key=${API_KEY}`}
            large={`https://maps.googleapis.com/maps/api/staticmap?center=${country.name.common}&zoom=5&size=500x500&scale=2&key=${API_KEY}`}
            alt="Location Map"
            className="hover:bg-hover-card-light transition-all aspect-square object-cover border p-2 h-30 rounded-lg border-grey-400/80"
          />
        </div>
      </div>
      <div className="relative z-20 w-full w-1/2">
        <h1 className="font-extrabold text-3xl">{country?.name?.common}</h1>
        <div className="flex flex-wrap lg:flex-nowrap lg:gap-4 pt-5">
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
      </div>
      {/* <img
          src={map}
          className="absolute w-full h-full inset-0 opacity-10 object-cover pointer-events-none"
        /> */}
    </div>
  );
};

export default CountryDetail;
