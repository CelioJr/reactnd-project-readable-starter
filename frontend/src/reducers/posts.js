import { RECEIVE_POSTS, INCREMENT_VOTE_SCORE, DECREMENT_VOTE_SCORE, ADD_NEW_POST, DELETE_POST, UP_DOWN_VOTE_SCORE } from "../actions/posts";

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
            delete state[action.postId]
            return state
        case UP_DOWN_VOTE_SCORE:
        return {
            ...state,
            [action.post.id] : {
                ...action.post,
                voteScore: action.post.voteScore
            }
        }
        default:
            return state
    }
}