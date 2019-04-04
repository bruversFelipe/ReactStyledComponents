import React from "react";
import ReactDOM from "react-dom";
import LocaleProvider from "antd/lib/locale-provider";
import ptBr from "antd/lib/locale-provider/pt_BR";

import Home from "./Containers/Home";
import "antd/dist/antd.css";
import { ContextThemeProvider } from "./ContextTheme";

ReactDOM.render(
  <LocaleProvider locale={ptBr}>
    <ContextThemeProvider>
      <Home />
    </ContextThemeProvider>
  </LocaleProvider>,
  document.getElementById("root")
);
