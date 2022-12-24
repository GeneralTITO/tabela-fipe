import { ContextProvider } from "./contexts";
import { RoutesMain } from "./routes";
import { Container } from "./styles/Container";
import { Global } from "./styles/global";

export function App() {
  return (
    <>
      <Global />
      <ContextProvider>
        <Container>
          <RoutesMain />
        </Container>
      </ContextProvider>
    </>
  );
}
