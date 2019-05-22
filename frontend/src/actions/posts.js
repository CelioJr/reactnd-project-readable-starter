import { showLoading, hideLoading } from "react-redux-loading"
import * as ServiceAPI from '../services/ServiceAPI'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ADD_NEW_POST = 'ADD_NEW_POST'
export const INCREMENT_VOTE_SCORE = 'INCREMENT_VOTE_SCORE'
export const DECREMENT_VOTE_SCORE = 'DECREMENT_VOTE_SCORE'


export function receivePost (posts) {
    return {
        type: RECEIVE_POSTS,
        posts,
    }
}

export function incrementVoteScore(postId) {
    return {
        type: INCREMENT_VOTE_SCORE,
        postId
    }
}

export function decrementVoteScore(postId) {
    return {
        type: DECREMENT_VOTE_SCORE,
        postId
    }
}

export function handleReceivePosts(){
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
                dispatch({type: ADD_NEW_POST, post: data})
                dispatch(hideLoading())
                callback()
            })
    }
}