import { FormControl, InputLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useContext, useEffect, useState } from "react";
import { Brand } from "../components/Brand";
import { Type } from "../components/Type";
import { Context } from "../contexts";
import { Api } from "../services/api";
import { Datum, iInfo, iModels } from "./types";

export const Home = () => {





  const [code, setCode] = useState("");
  const [info, setInfo] = useState({} as iInfo);
const { token, modelBrand}= useContext(Context)


  useEffect(() => {
    const getSearch = async () => {
      if (code) {
        try {
          Api.defaults.headers.authorization = `Bearer ${token}`;
          const mensage = await Api.get(`years/${code}`);
          setInfo(mensage.data);
        } catch (error) {
          console.log(error);
        } finally {
        }
      }
    };
    getSearch();
  }, [code]);

  return (
    <>
      <Type/>
      <Brand/>
      <FormControl fullWidth>
        <InputLabel id="modelo">Modelo</InputLabel>
        <Select
          labelId="modelo"
          id="modelo"
          value={code && code}
          label="Brand car"
          onChange={(e) => setCode(e.target.value)}
        >
          <MenuItem value={""}>Selecione um modelo</MenuItem>
          {modelBrand &&
            modelBrand.map((e) => (
              <MenuItem value={e.fipe_code} key={e.fipe_code}>
                {e.model}
              </MenuItem>
            ))}
        </Select>
      </FormControl>

      {info.brand && (
        <div>
          <div>
            <p>{info.brand}</p>
            <p>{info.model}</p>
            <p>ultima atualização: {info.reference}</p>
          </div>
          <div>
            {info.years &&
              info.years.map((e) => (
                <div key={e.year_id}>
                  <p>
                    fabricação: {e.model_year} modelo:{e.year_id}
                  </p>
                  <p>combustível: {e.fuel}</p>
                  <p>preço: {e.price}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};
