import 'core-js/stable' // polyfills
import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import App from './Components/App'
import theme from './theme'
import { BrowserRouter } from "react-router-dom";

ReactDOM.hydrate(
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
