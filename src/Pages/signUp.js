import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

class signUp extends Component {
	state = {
		profile: null,
		postIdParam: null,
		isMobile: false,
		isDesktop: true,
		isTablet: false,
		loadingData: false,
		userPosts: [],
	}

	componentWillUnmount() {
	
	}

	static fetchInitialData() {}

	componentDidMount() {
	
	}

	render() {
		return (
        <p>{`welcome to the signUp page`}</p>
		)
	}
}

export default signUp
