const SelectDropdown = ({ filter, handleChange }) => {
  const regions = [
    { name: "Filter by region", value: "" },
    { name: "Africa", value: "africa" },
    { name: "America", value: "america" },
    { name: "Asia", value: "asia" },
    { name: "Europe", value: "europe" },
    { name: "Oceania", value: "oceania" },
  ];

  return (
    <>
      <select
        value={filter.value}
        name="countries-selector"
        id="select-countries"
        onChange={(e) => {
          console.log(e.target);
          handleChange(
            { 
                name: e.target.value !='' && (e.target.value).toUpperCase(), 
                value: e.target.value 
            });
        }}
        className="bg-white shadow-md py-2 px-4 rounded-lg font-medium"
      >
        {regions.map((region) => (
          <option 
            key={region.name} 
            value={region.value}
          >
            {region.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectDropdown;
