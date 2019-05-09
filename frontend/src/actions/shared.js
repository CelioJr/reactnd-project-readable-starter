import { showLoading, hideLoading } from "react-redux-loading";
import { getInitialData } from "../services/ServiceAPI";
import { receiveCategories } from "./categories";
import { receivePost } from "./posts";

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