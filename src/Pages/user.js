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
		this.state = {
			loadingData: false,
			user: {},
			credentials: {},
			posts: [],
			likes: []
		}
		// if (this.state.posts < 1) {
		// 	console.log(`reloading the state ${this.props.match.params.handle}`)
		// 	store.dispatch(getUserData(this.props.match.params.handle))
		// }
	}

	componentWillUnmount() {
	
	}

	static initialActionWithParams(params) {
		return getUserData(params)
	}

	componentDidMount() {
		// if (this.state.posts < 1) {
		// 	getUserData(this.props.match.params.handle)
		// }
	}

	render() {
		const { posts, loadingData, classes, user } = this.props
		return (
            <div>
				<p>{'use paragraph'}</p>
				<p>{`Number of post ${posts.length}`}</p>
				<p>{`User is ${JSON.stringify(user)}`}</p>
				{ posts ? 
				 posts.map( post =>{
					<h1>{post.body}</h1>
				 }) :
				 console.log('nothing to post')
				}
            </div>
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

// const mapStateToActions = (state) => ({
// 	getUserData,
// })

export default connect(mapStateToProps, { getUserData })(withStyles(styles)(user))