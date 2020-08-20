import {
	FETCH_FEED_POSTS,
	SET_POSTS_ERROR,
	STOP_LOADING_DATA,
	START_LOADING_DATA,
	FETCH_USER_POST_PROFILE,
	SET_POST_PROFILE_ERROR,
} from '../types'
import axios from 'axios'
// Fetch all public posts
export const getposts = () => (dispatch) => {
	dispatch(startLoadingData())
	return axios
		.get('/feed')
		.then((res) => {
			dispatch({
				type: FETCH_FEED_POSTS,
				payload: res.data,
			})
			dispatch(clearLoadingData())
		})
		.catch((err) => {
			dispatch({
				type: SET_POSTS_ERROR,
				payload: err,
			})
		})
}

// Fetch users profile
export const getUserData = (userHandle) => (dispatch) => {
  dispatch(startLoadingData())
	return axios
		.get(`/${userHandle}`)
		.then((res) => {
			dispatch({
				type: FETCH_USER_POST_PROFILE,
				payload: res.data,
			})
		})
		.catch((err) => {
			dispatch({
				type: SET_POST_PROFILE_ERROR,
				payload: err,
			})
		})
}

export const clearLoadingData = () => (dispatch) => {
	dispatch({ type: STOP_LOADING_DATA })
}

export const startLoadingData = () => (dispatch) => {
	dispatch({ type: START_LOADING_DATA })
}
