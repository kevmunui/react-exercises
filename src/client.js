import 'core-js/stable' // polyfills
import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import App from './Components/App'
import theme from './theme'
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import configureStore from './configStore'


const preloadedState = window.__initialData__
delete window.__initialData__
const store = configureStore(preloadedState)

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter >
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>,
  </Provider>,
  document.getElementById('root'),
  () => {
    document.getElementById('jss-styles').remove()
  }
)
