import { FormControl, InputLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { Api } from "../services/api";
import { Datum, iInfo, iModels } from "./types";

export const Home = () => {
  const [type, setType] = useState("1");
  const [response, setResponse] = useState([] as Datum[]);
  const token = "2184|hETyPL1d8ftUchHPVOkccTeodqquBjQg";
  const [brand, setBrand] = useState("");
  const [modelBrand, setModelBrand] = useState([] as iModels[]);
  const [code, setCode] = useState("");
  const [info, setInfo] = useState({} as iInfo);

  useEffect(() => {
    async function getSearh() {
      try {
        Api.defaults.headers.authorization = `Bearer ${token}`;
        const mensage = await Api.get(`brands/${type}`);
        setResponse(mensage.data);
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
    getSearh();
  }, [type]);
  useEffect(() => {
    const getSearch = async () => {
      if (brand) {
        try {
          Api.defaults.headers.authorization = `Bearer ${token}`;
          const mensage = await Api.get(`models/${brand}`);
          setModelBrand(mensage.data);
        } catch (error) {
          console.log(error);
        } finally {
        }
      }
    };
    getSearch();
  }, [brand]);
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
      <FormControl fullWidth>
        <InputLabel id="type">Tipo de veículo</InputLabel>
        <Select
          labelId="type"
          id="type"
          value={type && type}
          label="Tipo de veículo"
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value="1">Carro</MenuItem>
          <MenuItem value="2">Moto</MenuItem>
          <MenuItem value="3">Caminhão</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="brand">Marca</InputLabel>
        <Select
          labelId="brand"
          id="brand"
          value={brand && brand}
          label="Brand car"
          onChange={(e) => setBrand(e.target.value)}
        >
          <MenuItem value={""}>Selecione uma marca</MenuItem>
          {response &&
            response.map((e) => (
              <MenuItem value={e.id} key={e.id}>
                {e.brand}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="brand">Modelo</InputLabel>
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
