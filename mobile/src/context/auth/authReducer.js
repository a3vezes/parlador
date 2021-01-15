import {
  SIGN_IN,
  SIGN_OUT,
  RESTORE_TOKEN,
  SET_LOADING,
  SIGN_UP,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        userToken: action.token,
        loading: false,
      };
    case SIGN_OUT:
      return {
        ...state,
        userToken: null,
        loading: false,
      };
    case RESTORE_TOKEN:
      return {
        ...state,
        userToken: action.token,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SIGN_UP:
      return {
        ...state,
        userToken: action.token,
        loading: false,
      };
  }
};
