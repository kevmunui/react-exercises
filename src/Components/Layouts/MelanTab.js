import React, { Component } from 'react'
import { Tabs } from '@material-ui/core'
import { Tab } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import GridOnOutlinedIcon from '@material-ui/icons/GridOnOutlined'
import PublicTwoToneIcon from '@material-ui/icons/PublicTwoTone'
import ReplyIcon from '@material-ui/icons/Reply'


class MelanTab extends Component {
	constructor(props) {
		super(props)
		this.state = {
			posts: [],
			errors: {},
			handle: {},
			loadingData: false,
			selectedTab: 0,
		}
	}

	handleChange = (event, index) => {
		console.log('clicked')
		this.props.handleTabSelected(index)
	}

	getIndex = () => {
		const { selectedTab } = this.props
		console.log(`the index is ${selectedTab}`)
		return selectedTab
	}

	render() {
		const { posts, loadingData, handle } = this.props

		return (
			<Tabs value={this.getIndex()} onChange={this.handleChange}>
				<Tab label="Posts" icon={<GridOnOutlinedIcon />} />
				<Tab label="Public" icon={<PublicTwoToneIcon />} />
				<Tab label="Shared" icon={<ReplyIcon />} />
			</Tabs>
		)
	}
}

export default MelanTab
