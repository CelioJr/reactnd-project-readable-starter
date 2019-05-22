const api = "http://localhost:3001"

export const headers = {
    'Accept': 'application/json',
    'Authorization': 'project-udacity',
    'Content-Type': 'application/json'
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

export const savePost = (post) => {
    return fetch(`${api}/posts`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(post)
      })
}