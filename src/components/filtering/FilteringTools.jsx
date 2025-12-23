import SearchInput from "../ui/SearchInput";
import SelectDropdown from "../ui/SelectDropdown";
const FilteringTools = () => {
  return (
    <>
      <div className="flex justify-between gap-4 items-center py-5">
        <SearchInput placeholder="search for a country..." />
        <SelectDropdown />
      </div>
    </>
  );
};

export default FilteringTools;
