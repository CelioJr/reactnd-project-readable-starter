import { RECEIVE_POSTS } from "../actions/posts";

export default function posts(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            const posts = action.posts.reduce((arr, p) => {
                arr[p.id] = p
                return arr
            }, {})

            return posts
        default:
            return state
    }
}