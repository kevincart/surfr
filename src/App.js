import React from 'react'
import { Route, Switch } from 'react-router-dom'
// We will create these two pages in a moment
import Index from './pages/index'
import About from './pages/about'

export default function App() {
  // .^.^. Surfing with a simple router
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/about" component={About} />
    </Switch>
  )
}
