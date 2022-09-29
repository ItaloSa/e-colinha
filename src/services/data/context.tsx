import React, { createContext, useContext, useState } from "react";
import { CandidatoData } from "./data";

type DataContextProps = {
  candidatos: CandidatoData;
  setData: (data: CandidatoData) => void;
};

const defaultValues: DataContextProps = {
  candidatos: {
    governadores: [],
    deputadosEstadual: [],
    deputadosFederal: [],
    presidentes: [],
    senadores: [],
  },
  setData: () => {},
};

export const DataContext = createContext<DataContextProps>(defaultValues);

type Props = {
  children?: React.ReactNode;
};

export function DataProvider({ children }: Props) {
  const [state, setState] = useState(defaultValues);

  const setData = (data: CandidatoData) => {
    setState((current) => ({ ...current, candidatos: data }));
  };

  const values = {
    ...state,
    setData,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
}

export const useDataContext = () => {
  return useContext(DataContext);
};
