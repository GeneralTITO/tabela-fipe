import { useState } from "react";
import { createContext } from "react";
import { Datum, iInfo, iModels } from "../pages/types";

type iContext = {
  token: string;
  response: Datum[] | undefined;
  setResponse: React.Dispatch<React.SetStateAction<undefined>>;
  modelBrand: iModels[];
  setModelBrand: React.Dispatch<React.SetStateAction<iModels[]>>;
  info: iInfo;
  setInfo: React.Dispatch<React.SetStateAction<iInfo>>;
  brand: string;
  setBrand: React.Dispatch<React.SetStateAction<string>>;
};
type iContextProps = {
  children: React.ReactNode;
};
export const Context = createContext({} as iContext);

export const ContextProvider = ({ children }: iContextProps) => {
  const token = "2187|84sT4JNa3oXc4bLj6z03GG1AsrTBi1hb";
  const [response, setResponse] = useState();
  const [modelBrand, setModelBrand] = useState([] as iModels[]);
  const [info, setInfo] = useState({} as iInfo);
  const [brand, setBrand] = useState("");

  return (
    <Context.Provider
      value={{
        token,
        response,
        setResponse,
        modelBrand,
        setModelBrand,
        info,
        setInfo,
        brand,
        setBrand,
      }}
    >
      {children}
    </Context.Provider>
  );
};
