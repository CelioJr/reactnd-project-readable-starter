import { RECEIVE_POSTS, INCREMENT_VOTE_SCORE, DECREMENT_VOTE_SCORE } from "../actions/posts";

export default function posts(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            const posts = action.posts.reduce((arr, p) => {
                arr[p.id] = p
                return arr
            }, {})
            return posts
        case INCREMENT_VOTE_SCORE:
        return {
            ...state,
            [action.postId] : {
                ...state[action.postId],
                voteScore: state[action.postId].voteScore + 1
            }
        }
        case DECREMENT_VOTE_SCORE:
        return {
            ...state,
            [action.postId] : {
                ...state[action.postId],
                voteScore: state[action.postId].voteScore - 1
            }
        }
        default:
            return state
    }
}