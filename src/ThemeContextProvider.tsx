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
  }
  
  body {
    background-color: ${(props) => props.theme.colors.grey[0]};
    color: ${(props) => props.theme.colors.grey[600]};
    font-family: 'Montserrat', 'Open Sans', sans-serif;
    font-size: ${(props) => props.theme.typography.fontSizes.base};
    font-weight: ${(props) => props.theme.typography.fontWeigths.regular};
    line-height: ${(props) => props.theme.typography.lineHeights.base};
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
