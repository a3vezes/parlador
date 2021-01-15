import React, { useReducer, useContext } from 'react';
import PostsContext from './postsContext';
import PostsReducer from './postsReducer';
import AuthContext from '../auth/authContext';
import api from '../../services/api';
import {
  GET_POST,
  GET_POSTS,
  CREATE_POSTS,
  DELETE_POSTS,
  UPDATE_POSTS,
  SET_LOADING,
  REQUEST_FAIL,
} from '../types';

const AuthState = props => {
  const initialState = {
    posts: [],
    post: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(PostsReducer, initialState);

  const { userToken } = useContext(AuthContext);

  const config = {
    headers: { Authorization: `Bearer ${userToken}` },
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  const getPost = async id => {
    setLoading();

    const res = await api.get(`/posts/${id}`, config);

    dispatch({
      type: GET_POST,
      payload: res.data.data,
    });
  };

  const getPosts = async () => {
    setLoading();

    const res = await api.get('/posts', config);

    dispatch({
      type: GET_POSTS,
      payload: res.data.data,
    });
  };

  const deletePosts = async id => {
    try {
      setLoading();

      await api.delete(`/posts/${id}`, config);

      dispatch({
        type: DELETE_POSTS,
        payload: id,
      });
    } catch (e) {
      dispatch({
        type: REQUEST_FAIL,
      });
      console.error(e);
    }
  };

  const createPosts = async text => {
    try {
      setLoading();

      const res = await api.post(
        `/posts`,
        {
          text,
        },
        config
      );

      dispatch({
        type: CREATE_POSTS,
        payload: res.data.data,
      });
    } catch (e) {
      dispatch({
        type: REQUEST_FAIL,
      });
      console.error(e);
    }
  };

  const updatePosts = async (postId, text) => {
    try {
      setLoading();
      const res = await api.put(
        `/posts/${postId}`,
        {
          text,
        },
        config
      );
      dispatch({
        type: UPDATE_POSTS,
        payload: res.data.data,
      });
    } catch (e) {
      dispatch({
        type: REQUEST_FAIL,
      });
      console.error(e);
    }
  };

  return (
    <PostsContext.Provider
      value={{
        posts: state.posts,
        post: state.post,
        loading: state.loading,
        getPost,
        getPosts,
        deletePosts,
        createPosts,
        updatePosts,
      }}
    >
      {props.children}
    </PostsContext.Provider>
  );
};

export default AuthState;
