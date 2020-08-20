import {
	FETCH_FEED_POSTS,
	SET_POSTS_ERROR,
	STOP_LOADING_DATA,
	START_LOADING_DATA,
	FETCH_USER_POST_PROFILE,
	SET_POST_PROFILE_ERROR,
} from '../types'

import initialState from '../initialState'

export default function (state = initialState, action) {
	switch (action.type) {
	case FETCH_FEED_POSTS:
		return {
			...state,
			posts: action.payload,
		}
	case STOP_LOADING_DATA:
		return {
			...state,
			loadingData: false,
		}
	case SET_POSTS_ERROR:
		return {
			...state,
			errors: action.payload,
		}
	case START_LOADING_DATA:
		return {
			...state,
			loadingData: true,
		}
	case FETCH_USER_POST_PROFILE:
		return {
			...state,
			...action.payload,
		}
	case SET_POST_PROFILE_ERROR:
		return {
			...state,
			errors: action.payload,
		}
	default:
		return state
	}
}
