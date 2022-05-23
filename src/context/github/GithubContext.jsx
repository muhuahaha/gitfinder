/* eslint-disable no-use-before-define */
import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext('github');

const GITHUB_URL = `${import.meta.env.VITE_API_URL}`;
const GITHUB_TOKEN = `${import.meta.env.VITE_API_GITHUB_TOKEN}`;

console.log(GITHUB_URL);

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Get initial users (test purposes)
  const fetchUsers = async () => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();

    dispatch({
      type: 'GET_USERS',
      payload: data,
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
