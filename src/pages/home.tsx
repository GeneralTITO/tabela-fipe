import { Brand } from "../components/Brand";
import { Model } from "../components/Model";
import { RenderPrices } from "../components/RenderPrices";
import { Type } from "../components/Type";
import { DivStyled } from "./styles";

export const Home = () => {
  return (
    <DivStyled>
      <div>
        <Type />
        <Brand />
        <Model />
      </div>
      <RenderPrices />
    </DivStyled>
  );
};
