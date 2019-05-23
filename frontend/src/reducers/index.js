import { combineReducers } from "redux";
import categories from './categories'
import posts from './posts'
import shared from './shared'
import comments from './comments'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
    categories,
    posts,
    shared,
    comments,
    loadingBar: loadingBarReducer,
})