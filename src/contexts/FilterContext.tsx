'use client'

import { createContext, useContext, useState, ReactNode } from "react";

type FilterContextType = {
    setFilterComponent: (component: ReactNode) => void;
    filterComponent: ReactNode;
  };
  
const FilterContext = createContext<FilterContextType>({
    setFilterComponent: () => {},
    filterComponent: null,
  });

export const useLayout = () => useContext(FilterContext);

export const FilterContextProvider = ({ children }: { children: ReactNode }) => {
  const [filterComponent, setFilterComponent] = useState<ReactNode>(null);

  console.log(filterComponent)

  return (
    <FilterContext.Provider value={{ filterComponent, setFilterComponent }}>
      {children}
    </FilterContext.Provider>
  );
};
