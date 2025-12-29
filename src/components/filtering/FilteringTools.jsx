import SearchInput from "../ui/SearchInput";
import SelectDropdown from "../ui/SelectDropdown";

const FilteringTools = ({filter, handleChange, searchWord, onSearch}) => {
  return (
      <div className="flex flex-wrap justify-between gap-4 items-center py-5">
        <SearchInput placeholder="search for a country..." name="country search" value={searchWord} onInputChange={onSearch}/>
        <SelectDropdown filter={filter} handleChange={handleChange}/>
      </div>
  );
};

export default FilteringTools;
