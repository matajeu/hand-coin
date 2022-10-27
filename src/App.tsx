import { Reset } from "styled-reset";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import Router from "./Router";
import { useRecoilValue } from "recoil";
import { themeModeAtom } from "./store/atoms";

function App() {
  const themeMode = useRecoilValue(themeModeAtom);
  return (
    <>
      <ThemeProvider theme={themeMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Reset />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
