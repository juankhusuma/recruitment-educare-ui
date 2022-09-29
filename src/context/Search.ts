import { createContext, Dispatch, SetStateAction } from "react";

interface ISearchContext {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export const SearchContext = createContext<ISearchContext>({
  search: "",
  setSearch: () => {},
});
