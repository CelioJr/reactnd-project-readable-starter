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

export const deletePost = (postId) => {
    return fetch(`${api}/posts/${postId}`, {
      method: 'DELETE',
      headers: headers
    }).then(res => res.json())
  }

  export const votePost = (postId, option) => {
    return fetch(`${api}/posts/${postId}`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ option })
    }).then(res => res.json())
  }

  export const updatePost = (postId, title, body) => {
    return fetch(`${api}/posts/${postId}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({ title: title, body: body })
    })
      .then(res => res.json())
  }

  export const getComments = (postId) => {
    return fetch(`${api}/posts/${postId}/comments`, { headers })
      .then(res => res.json())  
  }

  export const voteComment = (commentId, option) => {
    return fetch(`${api}/comments/${commentId}`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ option })
    })
      .then(res => res.json())
  }
  export const deleteComment = (commentId) => {
    return fetch(`${api}/comments/${commentId}`, {
      method: 'DELETE',
      headers: headers
    })
      .then(res => res.json())
  }


export const updateComment = (commentId, timestamp, body) => {
  return fetch(`${api}/comments/${commentId}`, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify({ timestamp: timestamp, body: body })
  })
    .then(res => res.json())
}