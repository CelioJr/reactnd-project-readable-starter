import { RECEIVE_POSTS, ADD_NEW_POST, DELETE_POST, UP_DOWN_VOTE_SCORE, UPDATE_POST } from "../actions/posts";

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
        case UPDATE_POST:
            console.log('state', state)
            console.log('action', action)
            // const updatePost = state[action.postId]
            return {
                ...state,
                [action.postId]: {
                    ...action.updatePost
                }
            }
        default:
            return state
    }
}