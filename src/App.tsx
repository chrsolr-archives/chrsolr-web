import React from 'react'
import ThemeContextProvider from './ThemeContextProvider'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavigationMenu from './shared/NavigationMenu'
import Container from './shared/Container'

export default function App() {
  return (
    <ThemeContextProvider theme={'lightTheme'}>
      <Router>
        <main>
          <NavigationMenu brandName="chrsolr" />

          <Container>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Container>
        </main>
      </Router>
    </ThemeContextProvider>
  )
}

function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Users</h2>
}
