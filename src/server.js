import React from 'react'
import { StaticRouter, matchPath } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles'
import express from 'express'
import reload from 'reload'
import App from './Components/App'
import theme from './theme'

const app = express()

const port = 3000
const dev = process.env.NODE_ENV === 'development'

app.use(express.static('public'))

if (dev) {
  reload(app)
}
// todo
// Add the reducer to fetch initial data 
// routes
app.use((req, res) => {
  const sheets = new ServerStyleSheets()

  const html = renderToString(
    sheets.collect(
      <StaticRouter location={req.url}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StaticRouter> 
    )
  )

  const css = sheets.toString()

  res.send(`
    <!DOCTYPE html>
    <html lang='en'>

    <head>
      <meta charset='utf-8'>
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
      <title>React App</title>
      <style id='jss-styles'>${css}</style>
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
