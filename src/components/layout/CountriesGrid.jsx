import CountryCard from "./CountryCard";

const CountriesGrid = ({ countriesData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8 lg:gap-10 items-stretch">
      {countriesData.map((country) => (
        <CountryCard key={country.cca2} country={country}/>
      ))}
    </div>
  );
};

export default CountriesGrid;
