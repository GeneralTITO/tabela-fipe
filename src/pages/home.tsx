import { Brand } from "../components/Brand";
import { Model } from "../components/Model";
import { RenderPrices } from "../components/RenderPrices";
import { Type } from "../components/Type";

export const Home = () => {
  return (
    <>
      <Type />
      <Brand />
      <Model />
      <RenderPrices />
    </>
  );
};
