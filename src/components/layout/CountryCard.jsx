import { Link } from "react-router";

const CountryCard = ({ country, mode }) => {
  return (
    <Link
      className="h-full flex flex-col text-grey-950"
      to={`/country/${country.name.common}`}
    >
      <div className={`${mode==="light" ? 'bg-white hover:bg-hover-card-light' : 'bg-blue-900 text-white hover:bg-hover-card-dark'} flex-grow  cursor-pointer border border-transparent transition-all hover:border-teal-primary shadow-md rounded-lg`}
>
        <img
          src={country.flags.svg}
          className="w-full aspect-[16/9] object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold leading-6 py-3">
            {country.name.common}{" "}
          </h2>
          <p className="text-sm leading-6 text-grey-900">
            <span className="font-bold">Population:</span>{" "}
            {country.population.toLocaleString()}
          </p>
          <p className="text-sm leading-6 text-grey-900">
            <span className="font-bold">Region:</span> {country.region}
          </p>
          {country.capital && (
            <p className="text-sm leading-6 text-grey-900">
              <span className="font-bold">Capital:</span> {country.capital[0]}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
