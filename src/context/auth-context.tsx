import React, { createContext, useReducer, ReactNode } from 'react';
import jwtDecode from 'jwt-decode';

type MyToken = {
  exp: string;
  id: string;
  email: string;
  firstname: string;
  lastname: string;
};

type AuthState = {
  user: {
    id: string;
    email: string;
    firstname: string;
    lastname: string;
    token: string;
  };
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

const AuthContext = createContext({} as ContextProps);

let initialState = {
  user: {
    id: '',
    email: '',
    firstname: '',
    lastname: '',
    token: '',
  },
};

if (localStorage.getItem('jwtToken')) {
  const token = localStorage.getItem('jwtToken') || '';
  const decodedToken = jwtDecode<MyToken>(localStorage.getItem('jwtToken') || '{}');

  if (parseInt(decodedToken.exp) * 1000 < Date.now()) {
    localStorage.removeItem('jwtToken');
  } else {
    initialState = {
      user: {
        id: decodedToken.id,
        email: decodedToken.email,
        firstname: decodedToken.firstname,
        lastname: decodedToken.lastname,
        token: token,
      },
    };
  }
}

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: {
          id: action.payload.user.id,
          email: action.payload.user.email,
          firstname: action.payload.user.firstname,
          lastname: action.payload.user.lastname,
          token: action.payload.user.token,
        },
      };
    case 'LOGOUT':
      return {
        ...state,
        user: {
          id: '',
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

const AuthProvider = ({ children }: AuthStateProps): JSX.Element => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const loginData = (user: AuthState) => {
    localStorage.setItem('jwtToken', user.user.token);
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
