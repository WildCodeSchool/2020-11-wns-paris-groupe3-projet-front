import React, { createContext, useReducer, ReactNode } from 'react';
import jwtDecode from 'jwt-decode';

type MyToken = {
  exp: string;
  _id: number;
  creation_date: string;
  email: string;
  firstname: string;
  lastname: string;
  token: string;
};

type AuthState = {
  _id: number;
  creation_date: string;
  email: string;
  firstname: string;
  lastname: string;
  token: string;
};

type AuthStateProps = {
  children: ReactNode;
};

type AuthAction = { type: 'LOGIN'; payload: AuthState } | { type: 'LOGOUT' };

type ContextProps = {
  state: AuthState;
  dispatch: {
    loginData: (user: AuthState) => void;
    logoutData: () => void;
  };
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        _id: action.payload._id,
        creation_date: action.payload.creation_date,
        email: action.payload.email,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        token: action.payload.token,
      };
    case 'LOGOUT':
      return {
        ...state,
        _id: 0,
        creation_date: '',
        email: '',
        firstname: '',
        lastname: '',
        token: '',
      };
    default:
      return state;
  }
};

let initialState = {
  _id: 0,
  creation_date: '',
  email: '',
  firstname: '',
  lastname: '',
  token: '',
};

if (localStorage.getItem('jwtToken')) {
  const decodedToken = jwtDecode<MyToken>(localStorage.getItem('jwtToken') || '{}');

  if (parseInt(decodedToken.exp) * 1000 < Date.now()) {
    localStorage.removeItem('jwtToken');
  } else {
    initialState = decodedToken;
  }
}

const AuthContext = createContext({} as ContextProps);

const AuthProvider = ({ children }: AuthStateProps): JSX.Element => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const loginData = (user: AuthState) => {
    localStorage.setItem('jwtToken', user.token);
    dispatch({
      type: 'LOGIN',
      payload: user,
    });
  };

  const logoutData = () => {
    localStorage.removeItem('jwtToken');
    dispatch({
      type: 'LOGOUT',
    });
  };

  return <AuthContext.Provider value={{ state, dispatch: { loginData, logoutData } }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
