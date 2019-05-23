import { RECEIVE_COMMENTS, VOTE_COMMENT, UPDATE_COMMENT } from "../actions/comments";

export default function comments(state = {}, action) {
  switch (action.type) {
      case RECEIVE_COMMENTS:
          return Object.assign({}, state, {[action.postId]: action.comments})   
      case VOTE_COMMENT:
          return {
            ...state,
            [action.postId]: state[action.postId].map(comment => {
              if(comment.id === action.commentId){
                return action.commentUpdated
              }
              return comment
            })
          }
          case UPDATE_COMMENT:
          return {
            ...state,
            [action.postId]: state[action.postId].map(comment => {
              if(comment.id === action.commentId){
                return action.commentUpdated
              }
              return comment
            })
          }
      default:
        return state
  }
}