import React, { Component, Fragment } from 'react'
import { CssBaseline } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import { Header, Footer } from './Layouts'
import routes from '../Routes/routes'
import { Router, Route } from 'react-router-dom'

export default class extends Component {

  render() {
    return (
      <>
        <div>
          <Header/>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
          <Footer/>
        </div>
      </>
    )
  }
}
