import { assets } from "../assets/assets";

const SearchBox = ({ search, setSearch }) => {
  return (
    <div className="flex items-center gap-2 p-3 mt-4 border border-gray-400 dark:border-white/20 rounded-md">
      <img
        className="w-4 not-dark:invert"
        src={assets.search_icon}
        alt="Search"
      />
      <input
        className="text-xs placeholder:text-gray-400 outline-none"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        placeholder="Search Conversations"
      />
    </div>
  );
};

export default SearchBox;
