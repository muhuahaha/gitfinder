/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-use-before-define */
import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import githubReducer from './GithubReducer';

const GithubContext = createContext('github');

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const value = {
    ...state,
    dispatch,
  };

  return <GithubContext.Provider value={value}>{children}</GithubContext.Provider>;
};

GithubProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GithubContext;
