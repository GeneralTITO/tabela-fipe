import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React, { useState } from "react";
import { createContext } from "react";
import { JsxElement } from "typescript";
import { Datum, iModels } from "../pages/types";

type iContext = {
  token: string;
  response: Datum[] | undefined;
  setResponse: React.Dispatch<React.SetStateAction<undefined>>;
  modelBrand: iModels[];
  setModelBrand: React.Dispatch<React.SetStateAction<iModels[]>>;
};
type iContextProps = {
  children: React.ReactNode;
};
export const Context = createContext({} as iContext);

export const ContextProvider = ({ children }: iContextProps) => {
  const token = "2184|hETyPL1d8ftUchHPVOkccTeodqquBjQg";
  const [response, setResponse] = useState();
  const [modelBrand, setModelBrand] = useState([] as iModels[]);
  return (
    <Context.Provider
      value={{ token, response, setResponse, modelBrand, setModelBrand }}
    >
      {children}
    </Context.Provider>
  );
};
