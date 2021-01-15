import {
  GET_POST,
  GET_POSTS,
  CREATE_POSTS,
  DELETE_POSTS,
  UPDATE_POSTS,
  SET_LOADING,
  REQUEST_FAIL,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case DELETE_POSTS:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload),
        loading: false,
      };
    case CREATE_POSTS:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        loading: false,
      };
    case UPDATE_POSTS:
      return {
        ...state,
        posts: state.posts.map(post =>
          post._id === action.payload._id ? action.payload : post
        ),
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_FAIL:
      return {
        ...state,
        loading: false,
      };
  }
};
