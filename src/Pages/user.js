import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import melanTab from '../Components/Layouts/MelanTab'
import { getUserData } from '../Redux/Actions/rootAction'
import { connect } from 'react-redux'
import initialState from '../Redux/initialState'

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

class user extends Component {
	constructor(props) {
		super(props)
		this.state = initialState
	}

	componentWillUnmount() {
	
	}

	static initialActionWithParams(params) {
		return getUserData(params)
	}

	componentDidMount() {
		// if (this.state.posts < 1) {
		// 	this.state.getUserData(this.props.match.params.handle)
		// }
	}

	render() {
		const { posts, loadingData, classes } = this.props
		return (
            <>
                <p>{'this is the user page'}</p>
				<p>{`post are ${JSON.stringify(posts)}`}</p>
            </>
		)
	}
}

user.propTypes = {
	getUserData: PropTypes.func.isRequired,
	loadingData: PropTypes.bool.isRequireda,
	user: PropTypes.object.isRequire,
	credentials: PropTypes.object.isRequire,
	posts: PropTypes.array.isRequire,
	likes: PropTypes.array.isRequire,
}

const mapStateToProps = (state) => ({
	loadingData: state.loadingData,
	user: state.user,
	credentials: state.credentials,
	posts: state.posts,
	likes: state.likes,
})

const mapStateToActions = (state) => ({
	getUserData,
})

export default connect(mapStateToProps, mapStateToActions)(withStyles(styles)(user))