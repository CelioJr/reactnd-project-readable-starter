import { showLoading, hideLoading } from "react-redux-loading"
import * as ServiceAPI from '../services/ServiceAPI'
import { receivePostId } from "./posts";

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'

export const receiveComments = (postId) => {
  return dispatch => {
    dispatch(showLoading())
    ServiceAPI.getComments(postId)
      .then(comments => {
        dispatch({ type: RECEIVE_COMMENTS, postId, comments })
        dispatch(hideLoading())
      })
  }
}


export const voteComment = (commentId, postId, option) => {
  return (dispatch) => {
    ServiceAPI.voteComment(commentId, option)
      .then(commentUpdated => {
        dispatch(showLoading())
        dispatch({ type: VOTE_COMMENT, commentUpdated, commentId, postId })
        dispatch(hideLoading())
      })
  }
}

export const deleteComment = (commentId, postId) => {
  return (dispatch) => {
    dispatch(showLoading())
    ServiceAPI.deleteComment(commentId)
      .then(() => {
        dispatch(receivePostId(postId))
        dispatch(receiveComments(postId))
        dispatch(hideLoading())
      })
  }
}

export const handleUpdateComment = (commentId, postId, timestamp, body, callback) => {
  return (dispatch) => {
    dispatch(showLoading())
    ServiceAPI.updateComment(commentId, timestamp, body)
      .then(commentUpdated => {
        dispatch({ type: UPDATE_COMMENT, commentUpdated, commentId, postId })
        dispatch(hideLoading())
        callback()
      })
  }
}

export const addComment = (comment, postId, callback) => {
  return (dispatch) => {
    dispatch(showLoading())
    ServiceAPI.addComment(comment).then(comment => {
      // dispatch({ type: ADD_COMMENT, postId, comment })
      dispatch(receivePostId(postId))
      dispatch(receiveComments(postId))
      dispatch(hideLoading())
      callback()
    })
  }
}