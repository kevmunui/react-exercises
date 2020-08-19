import React, { Component } from 'react'
import { Header, Footer} from '../Components/Layouts'
import PropTypes from 'prop-types'
import axios from 'axios'
import melanTab from '../Components/Layouts/MelanTab'

class user extends Component {
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
            <>
                <Header/>
                <Footer/>
            </>
		)
	}
}

export default user
