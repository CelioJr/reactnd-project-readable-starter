export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const CHANGE_CATEGORY = 'CHANGE_CATEGORY'

export function receiveCategories(categories) {
    return {
        type: RECEIVE_CATEGORIES,
        categories,
    }
}

