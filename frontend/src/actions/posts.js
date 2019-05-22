import { showLoading, hideLoading } from "react-redux-loading"
import * as ServiceAPI from '../services/ServiceAPI'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ADD_NEW_POST = 'ADD_NEW_POST'
export const DELETE_POST = 'DELETE_POST'
export const UP_DOWN_VOTE_SCORE = 'UP_DOWN_VOTE_SCORE'

export function receivePost(posts) {
    return {
        type: RECEIVE_POSTS,
        posts,
    }
}

export function UpDownVoteScore(postId, option) {
    return (dispatch) => {
        dispatch(showLoading());
        return ServiceAPI.votePost(postId,option)
            .then((post) => {
                dispatch({type: UP_DOWN_VOTE_SCORE, post})
                dispatch(hideLoading())
            })
    }
}

export function handleReceivePosts() {
    return (dispatch) => {
        dispatch(showLoading());
        return ServiceAPI.getPosts(posts => {
            dispatch(receivePost(posts))
            dispatch(hideLoading())
        })
    }
}

export function handleAddNewPost(post, callback) {
    return (dispatch) => {
        dispatch(showLoading());
        return ServiceAPI.savePost(post)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: ADD_NEW_POST, post: data })
                dispatch(hideLoading())
                callback()
            })
    }
}

export const handleDeletePost = (postId) => {
    return dispatch => {
        dispatch(showLoading());
        ServiceAPI.deletePost(postId).then(() => {
            dispatch({ type: DELETE_POST, postId })
            dispatch(hideLoading())
        })

    }
}