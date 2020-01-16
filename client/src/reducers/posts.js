import {
  GET_POSTS,
  POSTS_ERROR,
  GET_POST,
  POST_ERROR,
  COMMENT_ADDED,
  COMMENT_REMOVED
} from '../actions/types';

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        post: null,
        loading: false
      };

    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false
      };

    case COMMENT_ADDED:
    case COMMENT_REMOVED:
      return {
        ...state,
        post: { ...state.post, comments: payload },
        loading: false
      };

    case POSTS_ERROR:
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };

    default:
      return state;
  }
}
