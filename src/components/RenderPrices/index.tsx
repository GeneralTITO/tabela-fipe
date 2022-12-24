import { useContext } from "react";
import { Context } from "../../contexts";

export const RenderPrices = () => {
  const { info } = useContext(Context);
  return (
    <>
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
