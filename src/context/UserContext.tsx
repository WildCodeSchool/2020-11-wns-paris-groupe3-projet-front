import React, { createContext, useReducer } from 'react';

export type User = {
  _id: number;
  creation_date: string;
  email: string;
  firstname: string;
  lastname: string;
  token: string;
};

const initialState = {
  user: null,
};

const UserContext = createContext({
  user: null,
  loginData: (user: User) => null,
  logoutData: () => null,
});

const userReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

const UserProvider = (props: any): JSX.Element => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const loginData = (userData: any) => {
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
