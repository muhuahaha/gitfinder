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
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

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

  // Get single user
  const getUser = async (login) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (response.status === 404) {
      window.location = '/notfound';
    } else {
      console.log(response, 'response');

      const data = await response.json();

      dispatch({
        type: 'GET_USER',
        payload: data,
      });
    }
  };

  // Get user repos
  const getUserRepos = async (login) => {
    setLoading();

    const params = new URLSearchParams({ sort: 'create', per_page: 10 });

    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    console.log(response, 'response Repos');

    const data = await response.json();

    dispatch({
      type: 'GET_REPOS',
      payload: data,
    });
  };

  // Clear users form this.state.
  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

  // Set Loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  const value = useMemo(() => ({
    users: state.users,
    loading: state.loading,
    user: state.user,
    repos: state.repos,
    searchUsers,
    clearUsers,
    getUser,
    getUserRepos,
  }));

  return <GithubContext.Provider value={value}>{children}</GithubContext.Provider>;
};

GithubProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GithubContext;
