import { Reset } from "styled-reset";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";
import { useRecoilValue } from "recoil";
import { themeModeAtom } from "./atoms";

function App() {
  const themeMode = useRecoilValue(themeModeAtom);
  return (
    <>
      <ThemeProvider theme={themeMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Reset />
        <Router />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
