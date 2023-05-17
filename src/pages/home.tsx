import { Brand } from "../components/Brand";
import { Model } from "../components/Model";
import { RenderPrices } from "../components/RenderPrices";
import { Type } from "../components/Type";
import { DivBanner, DivSelectStyled, DivStyled } from "./styles";

export const Home = () => {
  return (
    <DivStyled>
      <DivBanner>
        <p>Pesquise preço de carros vendidos oficialmente no brasil</p>
      </DivBanner>
      <DivSelectStyled>
        <Type />
        <Brand />
        <Model />
      </DivSelectStyled>
      <RenderPrices />
    </DivStyled>
  );
};
