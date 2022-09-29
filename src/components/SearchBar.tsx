import { useContext, useState } from "react";
import { SearchContext } from "../context/Search";
import { IoSearch } from "react-icons/io5";

const SearchBar: React.FC = () => {
  const { setSearch } = useContext(SearchContext);
  const [value, setValue] = useState<string>("");
  return (
    <div className="flex w-full justify-center items-center mt-5">
      <h1 className="text-white font-extrabold md:text-xl text-xs md:py-4 py-2 px-1 rounded-tl-md rounded-bl-md bg-gradient-to-tl from-yellow-400 via-green-400 to-sky-500">
        GIPHY
      </h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(() => e.target.value)}
        placeholder="Search all the GIFs and Stickers..."
        className="w-3/4 md:p-4 p-[6px] border-2 md:text-base text-xs focus:border-cyan-500 focus:outline-none"
      />
      <button
        onClick={() => setSearch(value)}
        className="bg-gradient-to-bl hover:from-yellow-400 hover:via-green-400 hover:to-sky-500 from-pink-500 via-purple-700 to-pink-600 rounded-tr-md rounded-br-md md:p-[22px] p-[10px]"
      >
        <IoSearch className="!text-white !font-bold md:!text-lg !text-xs" />
      </button>
    </div>
  );
};

export default SearchBar;
