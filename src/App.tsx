import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div
        css={`
          color: red;
        `}
      >
        <p>CHRSOLR</p>
      </div>
    </ThemeProvider>
  );
}
