const api = "http://localhost:3001"

const headers = {
    'Accept': 'application/json',
    'Authorization': 'project'
}

export const getCategories = async () => {
    let response = await fetch(`${api}/categories`, { headers })
    let categories = response.json()
    return categories
}

export const getPosts = async () => {
    let response = await fetch(`${api}/posts`, { headers })
    let posts = response.json()
    return posts
}

export const getInitialData = () => {
    return Promise.all([
        getCategories(),
        getPosts()
    ]).then(([categories, posts]) => ({
        ...categories,
        posts
    }))
}