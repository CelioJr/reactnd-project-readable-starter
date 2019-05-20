import { SET_FILTER, filters } from "../actions/shared";

const initialState = {
  filter: filters.TOP_SCORE
}

export default function shared(state = initialState, action) {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                filter: action.filter
            }
        default:
            return state
    }
}