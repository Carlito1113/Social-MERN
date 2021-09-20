import api from '../utils/api';
import { setAlert } from './alert';
import { 
  GET_POSTS,
  GET_POST,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST
} from './types';

// Get posts
export const getPosts = () => async dispatch => {
  try {
    const res = await api.get('/posts');
    
    dispatch({
      type: GET_POSTS,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// Add like
export const addLike = (id) => async dispatch => {
  try {
    const res = await api.put(`/posts/like/${id}`);
    
    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    })
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// Remove like
export const removeLike = (id) => async dispatch => {
  try {
    const res = await api.put(`/posts/unlike/${id}`);
    
    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    })
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// Delete post
export const deletePost = (id) => async dispatch => {
  try {
     await api.delete(`/posts/${id}`);
    
    dispatch({
      type: DELETE_POST,
      payload: id
    })

    dispatch(setAlert('Post Removed', 'success'))
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// Add Post
export const addPost = (formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await api.post(`/posts`, formData, config);
    
    dispatch({
      type: ADD_POST,
      payload: res.data
    })

    dispatch(setAlert('Post Created', 'success'))
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// Get post
export const getPost = (id) => async dispatch => {
  try {
    const res = await api.get(`/post/${id}`);
    
    dispatch({
      type: GET_POST,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}