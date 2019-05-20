import { showLoading, hideLoading } from "react-redux-loading";
import { getInitialData } from "../services/ServiceAPI";
import { receiveCategories } from "./categories";
import { receivePost } from "./posts";

export const SET_FILTER = 'SET_FILTER'

export const filters = {
	TOP_SCORE: 'voteScore',
	MOST_RECENT: 'timestamp',
}

export function setFilter(filter){
    return {
        type: SET_FILTER,
        filter
    }
}

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({categories, posts}) => {
                dispatch(receiveCategories(categories))
                dispatch(receivePost(posts))
                dispatch(hideLoading());
            })
    }
}