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
import routes from './Routes/routes'
import axios from 'axios'
axios.defaults.baseURL =
  'https://us-central1-melan-10eef.cloudfunctions.net/api'


const app = express()

const port = 3000
const dev = process.env.NODE_ENV === 'development'

app.use(cors())
app.use(express.static('public'))


if (dev) {
  reload(app)
}
// todo
// Add the reducer to fetch initial data 
// routes
app.use('*', async (req, res, next) => {

  const routeParams = req.baseUrl.split('/')[1]
  console.log(`Req Obj:${JSON.stringify(req.headers)}`)
  console.log(`Req params:${routeParams}`)
  const store = configureStore(initialState)
  const context = {}

  // Initialize data fetchers
  const promises = routes.reduce((acc, route) => {
    if (
      matchPath(req.baseUrl, route) &&
      route.component &&
      route.component.initialAction
    ) {
      console.log('in the initialAction')
      acc.push(
        Promise.resolve(store.dispatch(route.component.initialAction()))
      )
    } else if (
      matchPath(req.baseUrl, route) &&
      route.component &&
      route.component.initialActionWithParams
    ) {
      console.log('in the initialActionWithParams')
      acc.push(
        Promise.resolve(
          store.dispatch(route.component.initialActionWithParams(routeParams))
        )
      )
    }
    return acc
  }, [])


  Promise.all(promises)
			.then(() => {
        const sheets = new ServerStyleSheets()
        

        const html = renderToString(
          sheets.collect(
            <Provider store={store}>
              <StaticRouter location={req.url} context={context}>
                <ThemeProvider theme={theme}>
                  <App />
                </ThemeProvider>
              </StaticRouter> 
            </Provider>  
          )
        )

        const css = sheets.toString()
        const initialData = store.getState()

        return res.status(200).send(`
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
      }).catch(err => {
        res.status(500).send({error: `Error occured while loading server ${err}`})
      })

  })

app.listen(port, () => console.log(`http://localhost:${port}`))
