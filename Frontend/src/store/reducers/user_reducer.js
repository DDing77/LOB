import {
  LOGIN_USER,
  LOGOUT_USER,
  LOGIN_CHECK,
  REGISTER_USER,
} from "../actions/types";

const userstate = { isLogin: false, user: null, registerSuccess: null };
const userReducer = (state = userstate, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, isLogin: true, user: action.payload };
    case LOGOUT_USER:
      return { ...state, isLogin: false, user: null };
    case LOGIN_CHECK:
      return { ...state, isLogin: true, user: action.payload };
    case REGISTER_USER:
      return { ...state, registerSuccess: action.payload };
    default:
      return state;
  }
};

export default userReducer;
