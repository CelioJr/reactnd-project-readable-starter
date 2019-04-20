import { showLoading, hideLoading } from "react-redux-loading"
import * as ServiceAPI from '../services/ServiceAPI'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export function receivePost (posts) {
    return {
        type: RECEIVE_POSTS,
        posts,
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