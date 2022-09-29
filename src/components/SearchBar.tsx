import { useContext } from "react";
import { SearchContext } from "../context/Search";
import { IoSearch } from "react-icons/io5";

const SearchBar: React.FC = () => {
  const { search, setSearch } = useContext(SearchContext);
  return (
    <div className="flex w-full justify-center items-center">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(() => e.target.value)}
        placeholder="Search all the GIFs and Stickers..."
        className="w-3/4 p-4 rounded-tl-md rounded-bl-md border-2 focus:border-cyan-500 focus:outline-none"
      />
      <button className="bg-gradient-to-bl hover:from-yellow-400 hover:via-green-400 hover:to-sky-500 from-pink-500 via-purple-700 to-pink-600 rounded-tr-md rounded-br-md p-[22px]">
        <IoSearch className="!text-white !font-bold !text-lg" />
      </button>
    </div>
  );
};

export default SearchBar;
