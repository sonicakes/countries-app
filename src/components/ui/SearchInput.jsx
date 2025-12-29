import iconSearch from "../../assets/search.png";
const SearchInput = ({ 
  name, 
  value, 
  placeholder,
  onInputChange,
  mode
}) => {
  return (
    <div className="relative w-full md:w-100">
      <img
        src={iconSearch}
        alt="search icon"
        className=
        {`${mode==="dark" ? 'invert' : ''} absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none opacity-70`}
      />

      <input
        type="search"
        placeholder={placeholder}
        className=
        {`${mode==="light" ? 'bg-white' : 'bg-blue-900 text-white'} shadow-md pr-3 pl-12 py-2 rounded-lg font-medium`}
        aria-label="Search"
        name={name}
        value={value}
        onChange={(e) => onInputChange(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
