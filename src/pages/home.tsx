import { useEffect, useState } from "react";
import { Api } from "../services/api";
import { Datum, Welcome1 } from "./types";

export const Home = () => {
  const [type, setType] = useState(1);
  const [response, setResponse] = useState([] as Datum[]);
  const [loading, setLoading] = useState(true);
  const token = "2184|hETyPL1d8ftUchHPVOkccTeodqquBjQg";
  useEffect(() => {
    async function getSearh() {
      try {
        Api.defaults.headers.authorization = `Bearer ${token}`;
        const mensage = await Api.get(`brands/${type}`);
        console.log(mensage);
        setResponse(mensage.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getSearh();
  }, []);

  return <>
  <div>{response && response.map((e) => <p key={e.id}>{e.brand}</p>)}</div>
  <p>teste</p>
  </>;
};
