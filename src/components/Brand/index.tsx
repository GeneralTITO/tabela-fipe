import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../contexts";
import { Api } from "../../services/api";

export const Brand = () => {
  const { token, response, setModelBrand, brand, setBrand } = useContext(Context);
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
  return (
    <>
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
    </>
  );
};
