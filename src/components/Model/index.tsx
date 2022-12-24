import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../contexts";
import { Api } from "../../services/api";

export const Model = () => {
  const { modelBrand, token, setInfo } = useContext(Context);
  const [code, setCode] = useState("");
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
    </>
  );
};
