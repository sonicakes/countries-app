import { Link } from "react-router";

const CountryCard = ({ country }) => {
  return (
     <Link to={`/country/${country.name.common}`}>
    <div className="bg-white hover:bg-hover-card-light cursor-pointer border border-transparent transition-all hover:border-teal-primary shadow-md rounded-lg">
      <img
        src={country.flags.svg}
        className="w-full aspect-[16/9] object-cover rounded-t-lg"
      />
      <div className="p-3">
        <h2 className="text-xl font-bold">{country.name.common} </h2>

        <p>
          <span className="font-bold">Population:</span> {country.population}
        </p>
        <p>
          <span className="font-bold">Region:</span> {country.region}
        </p>
        {country.capital && (
          <p>
            <span className="font-bold">Capital:</span> {country.capital[0]}
          </p>
        )}
      </div>
    </div>
    </Link>
  );
};

export default CountryCard;
