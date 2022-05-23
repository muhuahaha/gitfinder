/* eslint-disable no-use-before-define */
import { createContext, useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';

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
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({ q: text });
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    console.log(response, 'response');

    const { items } = await response.json();

    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  const value = useMemo(() => ({
    users: state.users,
    loading: state.loading,
    searchUsers,
  }));

  return <GithubContext.Provider value={value}>{children}</GithubContext.Provider>;
};

GithubProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GithubContext;
