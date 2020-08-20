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

	static initialAction() {
		return getposts()
	}

	componentDidMount() {
		if (this.props.posts.length < 1) {
			//this.props.dispatch(getposts())
		}
	}

	render() {
		const { posts, loadingData, classes, user } = this.props
		return (
			<div>
				<p>{'Home Feed'}</p>
				<p>{`Number of post ${posts.length}`}</p>
				<p>{`${JSON.stringify(posts.map( post => post.body))}`}</p>
		   </div>
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

export default connect(mapStateToProps, { getposts })(withStyles(styles)(home))