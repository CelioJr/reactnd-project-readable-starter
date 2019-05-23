import { showLoading, hideLoading } from "react-redux-loading"
import * as ServiceAPI from '../services/ServiceAPI'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const VOTE_COMMENT = 'VOTE_COMMENT'

export const receiveComments = (postId) => {
  return dispatch => {
    dispatch(showLoading())
    ServiceAPI.getComments(postId)
      .then(comments => {
        dispatch({type: RECEIVE_COMMENTS, postId, comments})
        dispatch(hideLoading())
      })
  }
} 


export const voteComment = (commentId, postId, option) => {
  return (dispatch) => {
    ServiceAPI.voteComment(commentId, option).then(commentUpdated => {
      dispatch({ type: VOTE_COMMENT, commentUpdated, commentId, postId })
    })
  }
}