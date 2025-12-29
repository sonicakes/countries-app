import CountryCard from "./CountryCard";

const CountriesGrid = ({ countriesData, mode }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-10 items-stretch">
      {countriesData.map((country) => (
        <CountryCard key={country.cca2} country={country} mode={mode}/>
      ))}
    </div>
  );
};

export default CountriesGrid;
