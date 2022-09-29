import { useContext, useState } from "react";
import { SearchContext } from "../context/Search";
import { IoSearch } from "react-icons/io5";

const SearchBar: React.FC = () => {
  const { search, setSearch } = useContext(SearchContext);
  const [value, setValue] = useState<string>("");
  return (
    <div className="flex w-full justify-center items-center mt-5">
      <h1 className="text-white font-extrabold text-xl py-4 px-1 rounded-tl-md rounded-bl-md bg-gradient-to-tl from-yellow-400 via-green-400 to-sky-500">
        GIPHY
      </h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(() => e.target.value)}
        placeholder="Search all the GIFs and Stickers..."
        className="w-3/4 p-4 border-2 focus:border-cyan-500 focus:outline-none"
      />
      <button
        onClick={() => setSearch(value)}
        className="bg-gradient-to-bl hover:from-yellow-400 hover:via-green-400 hover:to-sky-500 from-pink-500 via-purple-700 to-pink-600 rounded-tr-md rounded-br-md p-[22px]"
      >
        <IoSearch className="!text-white !font-bold !text-lg" />
      </button>
    </div>
  );
};

export default SearchBar;
