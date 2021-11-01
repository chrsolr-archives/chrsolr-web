import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
  }
}

export const lightTheme: DefaultTheme = {
  primaryColor: "red",
  secondaryColor: "#666",
};

export const darkTheme: DefaultTheme = {
  primaryColor: "#ff0000",
  secondaryColor: "#cacaca",
};
