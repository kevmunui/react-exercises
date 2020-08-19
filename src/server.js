import React from 'react'
import cors from 'cors'
import serialize from 'serialize-javascript'
import { StaticRouter, matchPath } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles'
import express from 'express'
import reload from 'reload'
import App from './Components/App'
import theme from './theme'
import configureStore from './configStore'
import initialState from './Redux/initialState'


const app = express()

const port = 3000
const dev = process.env.NODE_ENV === 'development'

app.use(express.static('public'))
app.use(cors())

if (dev) {
  reload(app)
}
// todo
// Add the reducer to fetch initial data 
// routes
app.use('*', async (req, res) => {
  const sheets = new ServerStyleSheets()

  const store = configureStore(initialState)
	const context = {}

  const html = renderToString(
    sheets.collect(
      <Provider store={store}>
        <StaticRouter location={req.url}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </StaticRouter> 
      </Provider>  
    )
  )

  const css = sheets.toString()
  const initialData = store.getState()

  res.send(`
    <!DOCTYPE html>
    <html lang='en'>

    <head>
      <meta charset='utf-8'>
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
      <title>Melan</title>
      <style id='jss-styles'>${css}</style>
      <script>window.__initialData__ = ${serialize(initialData)}</script>
    </head>

    <body>
      <div id='root'>${html}</div>
      <script src='main.js' async></script>
      ${dev ? `<script src='/reload/reload.js' async></script>` : ''}
    </body>

    </html>
  `.trim())
})

app.listen(port, () => console.log(`http://localhost:${port}`))
