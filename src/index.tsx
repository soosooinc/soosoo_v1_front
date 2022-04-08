import App from "./App";
import { RecoilRoot } from "recoil";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./components/styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { ThemeConfig } from "./components/styles/ThemeConfig";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={ThemeConfig}>
      <RecoilRoot>
        <GlobalStyle />
        <App />
      </RecoilRoot>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
