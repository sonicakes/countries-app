import SearchInput from "../ui/SearchInput";
import SelectDropdown from "../ui/SelectDropdown";

const FilteringTools = ({
  filter,
  handleChange,
  searchWord,
  onSearch,
  mode,
}) => {
  return (
    <div className="flex flex-wrap justify-between gap-4 items-center py-5">
      <SearchInput
        placeholder="search for a country..."
        name="country search"
        value={searchWord}
        onInputChange={onSearch}
        mode={mode}
      />
      <SelectDropdown filter={filter} handleChange={handleChange} mode={mode} />
    </div>
  );
};

export default FilteringTools;
