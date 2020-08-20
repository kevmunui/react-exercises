import React, { Component } from 'react'
import { withWidth, AppBar, Tabs, Tab } from '@material-ui/core'
import { withContext } from '../../context'

class Footer extends Component {
  state = {
    index: 0
  }

  onIndexSelect = (e, index) => {
    this.setState({index:index})
  }

  getIndex = () => {
    return this.state.index
  }

  render() {
    const { width, muscles } = this.props
    const isMobile = width === 'xs'

    return (
      <AppBar position="static">
        <Tabs
          value={this.getIndex()}
          onChange={this.onIndexSelect}
          indicatorColor="secondary"
          textColor="secondary"
          variant={isMobile ? 'scrollable' : 'standard'}
          centered={!isMobile}
        >
          <Tab label="All" />
          <Tab label="one" />
          <Tab label="two" />
          </Tabs>
      </AppBar>
    )
  }
}

export default withContext(withWidth()(Footer))
