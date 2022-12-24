import { ContextProvider } from "./contexts";
import { RoutesMain } from "./routes";

export function App() {
  return (
    <ContextProvider>
      <RoutesMain />
    </ContextProvider>
  );
}
