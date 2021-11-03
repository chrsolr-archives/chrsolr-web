import React from 'react'
import ThemeContextProvider from './ThemeContextProvider'

export default function App() {
  return (
    <ThemeContextProvider theme={'lightTheme'}>
      <main>CHRSOLR</main>
    </ThemeContextProvider>
  )
}
