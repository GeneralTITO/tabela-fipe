import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../contexts";
import { Api } from "../../services/api";

export const Type = () => {
  const { token, setResponse } = useContext(Context);
  const [type, setType] = useState("1");
  useEffect(() => {
    async function getSearh() {
      try {
        Api.defaults.headers.authorization = `Bearer ${token}`;
        const mensage = await Api.get(`brands/${type}`);
        setResponse(mensage.data);
      } catch (error) {
      } finally {
      }
    }
    getSearh();
  }, [type]);
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
    </>
  );
};
