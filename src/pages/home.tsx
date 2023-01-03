import { Brand } from "../components/Brand";
import { Model } from "../components/Model";
import { RenderPrices } from "../components/RenderPrices";
import { Type } from "../components/Type";
import { DivSelectStyled, DivStyled } from "./styles";

export const Home = () => {
  return (
    <DivStyled>
      <DivSelectStyled>
        <Type />
        <Brand />
        <Model />
      </DivSelectStyled>
      <RenderPrices />
    </DivStyled>
  );
};
