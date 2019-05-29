import { RECEIVE_POSTS, ADD_NEW_POST, DELETE_POST, UP_DOWN_VOTE_SCORE, UPDATE_POST, RECEIVE_POST_ID } from "../actions/posts";

export default function posts(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            const posts = action.posts.reduce((arr, p) => {
                arr[p.id] = p
                return arr
            }, {})
            return posts
        case ADD_NEW_POST:
            return {
                ...state,
                [action.post.id]: {
                    ...action.post
                }
            }
        case DELETE_POST: 
            return Object.keys(state).reduce((obj, p) => {
                if(action.postId !== p){
                    obj[p] = state[p]
                }
                return obj
            }, {})
        case UP_DOWN_VOTE_SCORE:
        return {
            ...state,
            [action.post.id] : {
                ...action.post,
                voteScore: action.post.voteScore
            }
        }
        case UPDATE_POST:
            return {
                ...state,
                [action.postId]: {
                    ...action.updatePost
                }
            }
        case RECEIVE_POST_ID: 
            return {
                ...state,
                [action.post.id]: action.post
            }
        default:
            return state
    }
}