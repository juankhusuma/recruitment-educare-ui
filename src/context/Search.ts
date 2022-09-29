import { createContext, Dispatch, SetStateAction } from "react";

interface ISearchContext {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export const SearchContext = createContext<ISearchContext>({
  search: "",
  setSearch: () => {
    1; // Prevent eslint from yelling at me
    return;
  },
});
