import axios from 'axios';
import { GET_POSTS, POSTS_ERROR, ADD_POST, POST_DELETED } from './types';
import { setAlert } from './alert';

//Get all posts
export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get('/api/posts');

    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Add post
export const addPost = formData => async dispatch => {
  try {
    const config = {
      'Content-Type': 'application/json'
    };

    const res = await axios.post('/api/posts', formData, config);

    dispatch({ type: ADD_POST });
    dispatch(getPosts());

    dispatch(setAlert('Post Added', 'success'));

    console.log(res.data);
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: POSTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Delete Post  by id

export const deletePostById = post_id => async dispatch => {
  try {
    await axios.delete(`/api/posts/${post_id}`);
    dispatch({ type: POST_DELETED });

    dispatch(getPosts());
    dispatch(setAlert('Post Deleted', ''));
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
