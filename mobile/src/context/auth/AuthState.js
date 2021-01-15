import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import { AsyncStorage } from 'react-native';
import api from '../../services/api';
import {
  SIGN_IN,
  SIGN_OUT,
  RESTORE_TOKEN,
  SET_LOADING,
  SIGN_UP,
} from '../types';

const AuthState = props => {
  const initialState = {
    userToken: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const setLoading = () => dispatch({ type: SET_LOADING });

  const signIn = async (email, password) => {
    setLoading();

    let res;

    try {
      res = await api.post(`/auth/login`, {
        email,
        password,
      });
    } catch (e) {
      console.error(e);
    }

    await AsyncStorage.setItem('@User:token', res.data.token);

    dispatch({
      type: SIGN_IN,
      token: res.data.token,
    });
  };

  const signOut = async () => {
    setLoading();

    await AsyncStorage.removeItem('@User:token');

    dispatch({
      type: SIGN_OUT,
    });
  };

  const restoreToken = async () => {
    setLoading();

    const token = await AsyncStorage.getItem('@User:token');

    dispatch({ type: RESTORE_TOKEN, token });
  };

  const signUp = async (email, password, name) => {
    setLoading();

    let res;

    try {
      res = await api.post(`/auth/register`, {
        email,
        password,
        name,
      });
    } catch (e) {
      console.error(e);
    }

    await AsyncStorage.setItem('@User:token', res.data.token);

    dispatch({
      type: SIGN_UP,
      token: res.data.token,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        userToken: state.userToken,
        isLoading: state.loading,
        signIn,
        signOut,
        restoreToken,
        signUp,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
