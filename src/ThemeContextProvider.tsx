import React, { ReactNode } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { getTheme } from './theme'

interface Props {
  children: ReactNode
  theme: 'lightTheme' | 'darkTheme'
}

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0rem;
    padding: 0rem;
    font-size: 'Lato', 'Open Sans', sans-serif;
  }

  body {
    background-color: ${(props) => props.theme.colors.grey[0]};
  }
`

const ThemeContextProvider = ({ children, theme }: Props) => {
  return (
    <ThemeProvider theme={getTheme(theme)}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default ThemeContextProvider
