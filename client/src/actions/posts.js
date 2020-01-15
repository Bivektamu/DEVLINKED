import axios from 'axios';
import {
  GET_POSTS,
  POSTS_ERROR,
  GET_POST,
  POST_ERROR,
  ADD_POST,
  POST_DELETED,
  POST_LIKED,
  POST_UNLIKED,
  COMMENT_ADDED
} from './types';
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

//Get post by id
export const getPostById = post_id => async dispatch => {
  try {
    const res = await axios.get(`/api/posts/${post_id}`);
    dispatch({
      type: GET_POST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
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

//Add likes to post
export const addLikeToPost = post_id => async dispatch => {
  try {
    await axios.put(`/api/posts/like/${post_id}`);

    dispatch({ type: POST_LIKED });
    dispatch(getPosts());
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Remove like from post
export const removeLikeFromPost = post_id => async dispatch => {
  try {
    await axios.put(`/api/posts/unlike/${post_id}`);

    dispatch({ type: POST_UNLIKED });
    dispatch(getPosts());
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Add comment to post
export const addComment = (formData, post_id) => async dispatch => {
  try {
    const config = {
      'Content-Type': 'application/json'
    };

    console.log(formData);

    const res = await axios.post(
      `/api/posts/comment/${post_id}`,
      formData,
      config
    );

    dispatch({ type: COMMENT_ADDED });
    dispatch(getPostById(post_id));

    dispatch(setAlert('Comment Added', 'success'));

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
