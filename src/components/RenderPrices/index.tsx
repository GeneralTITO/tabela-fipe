import { useContext } from "react";
import { Context } from "../../contexts";
import { DivCardStyled, PAno, PPrice, SectionStyled } from "./styled";

export const RenderPrices = () => {
  const { info } = useContext(Context);
  return (
    <>
      {info.brand && (
        <SectionStyled>
          <header>
            <div>
              <p>{info.brand}</p>
              <p>{info.model}</p>
            </div>
            <p>Ultima atualização: {info.reference}</p>
          </header>
          <section>
            {info.years &&
              info.years.map((e) => (
                <DivCardStyled key={e.year_id}>
                  <div>
                    <PAno>
                      {" "}
                      fabricação: <span>{e.model_year}</span>
                    </PAno>
                    <p>modelo:{e.year_id}</p>
                  </div>
                  <p>combustível: {e.fuel}</p>
                  <PPrice>
                    preço:
                    <span>
                      {e.price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                  </PPrice>
                </DivCardStyled>
              ))}
          </section>
        </SectionStyled>
      )}
    </>
  );
};
