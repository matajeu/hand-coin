import { Reset } from "styled-reset";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Router from "./Router";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Reset />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
