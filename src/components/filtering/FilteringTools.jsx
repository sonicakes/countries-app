import SearchInput from "../ui/SearchInput";
import SelectDropdown from "../ui/SelectDropdown";

const FilteringTools = ({filter, handleChange}) => {
  return (
    <>
      <div className="flex justify-between gap-4 items-center py-5">
        <SearchInput placeholder="search for a country..." />
        <SelectDropdown filter={filter} handleChange={handleChange}/>
      </div>
    </>
  );
};

export default FilteringTools;
