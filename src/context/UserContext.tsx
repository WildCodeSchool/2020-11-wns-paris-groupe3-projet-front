import React, { createContext, useReducer } from 'react';
import jwtDecode from 'jwt-decode';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const initialState = {
  user: {
    _id: 0,
    creation_date: '',
    email: '',
    firstname: '',
    lastname: '',
    token: '',
  },
};

type User = {
  _id: number;
  creation_date: string;
  email: string;
  firstname: string;
  lastname: string;
  token: string;
};

type MyToken = {
  exp: string;
  _id: number;
  creation_date: string;
  email: string;
  firstname: string;
  lastname: string;
  token: string;
};

type LoginAction = {
  type: typeof LOGIN;
  payload: User;
};

type LogoutAction = {
  type: typeof LOGOUT;
};

type UserState = {
  user: User;
};

if (localStorage.getItem('jwtToken')) {
  const decodedToken = jwtDecode<MyToken>(localStorage.getItem('jwtToken') || '{}');

  if (parseInt(decodedToken.exp) * 1000 < Date.now()) {
    localStorage.removeItem('jwtToken');
  } else {
    initialState.user = decodedToken;
  }
}

const UserContext = createContext({
  user: null,
  loginData: (userData: User) => null,
  logoutData: () => null,
});

const userReducer = (state = initialState, action: LoginAction | LogoutAction): UserState => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: {
          _id: 0,
          creation_date: '',
          email: '',
          firstname: '',
          lastname: '',
          token: '',
        },
      };
    default:
      return state;
  }
};

const UserProvider = (props: any): JSX.Element => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const loginData = (userData: User) => {
    localStorage.setItem('jwtToken', userData.token);
    dispatch({
      type: 'LOGIN',
      payload: userData,
    });
  };

  const logoutData = () => {
    localStorage.removeItem('jwtToken');
    dispatch({
      type: 'LOGOUT',
    });
  };

  return <UserContext.Provider value={{ user: state.user, loginData, logoutData }} {...props} />;
};

export { UserContext, UserProvider };
