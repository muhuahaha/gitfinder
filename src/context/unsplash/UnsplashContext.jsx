/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-use-before-define */
import { createContext, useReducer } from 'react';
import UnsplashReducer from './UnsplashReducer';

const UnsplashContext = createContext();

const UNSPLASH_URL = `${import.meta.env.VITE_API_URL_UNSPLASH}`;
const UNSPLASH_TOKEN = `${import.meta.env.VITE_API_UNSPLASH_TOKEN}`;

export const UnsplashProvider = ({ children }) => {
  const initialState = {
    photos: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(UnsplashReducer, initialState);

  // Get search Results
  const searchPhotos = async (text) => {
    setLoading();
    const params = new URLSearchParams({
      query: text,
      count: 10,
      // per_page: 10,
      // order_by: 'popular',
      // orientation: 'landscape',
    });
    const response = await fetch(`${UNSPLASH_URL}/photos/random?${params}`, {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_TOKEN}`,
      },
    });

    console.log(response, 'response');

    const data = await response.json();
    dispatch({ type: 'GET_PHOTOS', payload: data });
  };

  // Get search Results
  const getUser = async (login) => {
    setLoading();
    console.log(login, 'lloooooggg');

    const response = await fetch(`${UNSPLASH_URL}/users/${login}`, {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_TOKEN}`,
      },
    });

    console.log(response, 're');

    if (response.status === 404) {
      console.log('404');
      // window.location = '/notfound';
    } else {
      console.log(response, 'response');

      const data = await response.json();
      dispatch({ type: 'GET_USER', payload: data });
    }
  };

  const clearPhotos = () => dispatch({ type: 'CLEAR_PHOTOS' });

  // Set loading

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <UnsplashContext.Provider
      value={{ photos: state.photos, loading: state.loading, user: state.user, searchPhotos, clearPhotos, getUser }}
    >
      {children}
    </UnsplashContext.Provider>
  );
};

export default UnsplashContext;
