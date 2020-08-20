import React, { Component } from 'react'
import { Header, Footer} from '../Components/Layouts'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import withStyles from '@material-ui/core/styles/withStyles'
import { getposts } from '../Redux/Actions/rootAction'

const styles = (theme) => ({
	...theme.spreadThis,
	// [theme.breakpoints.down('sm')]: {
	// 	margin: '0 0 0 0px',
	// },
	// [theme.breakpoints.up('sm')]: {
	// 	margin: '0 0 0 120px',
	// },
	// feedContainterApp: {
	// 	alignItems: 'center',
	// 	justify: 'center',
	// },
})

class home extends Component {
	state = {
		user: {},
		postIdParam: 0,
		loadingData: false,
		posts: [],
		post:{}
	}

	componentWillUnmount() {
	
	}

	static initialAction() {
		return getposts()
	}

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

home.propTypes = {
	getposts: PropTypes.func.isRequired,
	loadingData: PropTypes.bool.isRequireda,
	credentials: PropTypes.object.isRequire,
	posts: PropTypes.array.isRequire,
	likes: PropTypes.array.isRequire,
}

const mapStateToProps = (state) => ({
	loadingData: state.loadingData,
	credentials: state.credentials,
	posts: state.posts,
	likes: state.likes,
})

const mapStateToActions = (state) => ({
	getposts,
})

export default connect(mapStateToProps, mapStateToActions)(withStyles(styles)(home))