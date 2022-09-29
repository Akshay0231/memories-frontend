import * as api from '../api'

// action creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()

        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.error({ message: error })
    }
    // const action = { type: 'FETCH_ALL', payload: [] }
    // dispatch(action)
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)

        dispatch({ type: 'CREATE_POST', payload: data })
    } catch (error) {
        console.error({ message: error })
    }
}

export const updatePost = (id, updatedPost) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, updatedPost)

        dispatch({ type: 'UPDATE_POST', payload: data })
    } catch (error) {
        console.error({ message: error })
    }
}


export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)
        dispatch({ type: "DELETE_POST", payload: id })
    } catch (error) {
        console.error({ message: error })
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        await api.likePost(id)
        dispatch({ type: "LIKE_POST", payload: id })
    } catch (error) {
        console.error({ message: error })
    }
}