import 'core-js/stable' // polyfills
import 'regenerator-runtime/runtime'
import React from 'react'
import { hydrate } from 'react-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import App from './Components/App'
import theme from './theme'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

hydrate(
  <BrowserRouter >
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
  () => {
    document.getElementById('jss-styles').remove()
  }
)
