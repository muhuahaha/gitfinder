/* eslint-disable no-use-before-define */
import { createContext, useReducer } from 'react';
import UnsplashReducer from './UnsplashReducer';

const UnsplashContext = createContext();

const UNSPLASH_URL = `${import.meta.env.VITE_API_URL_UNSPLASH}`;
const UNSPLASH_TOKEN = `${import.meta.env.VITE_API_UNSPLASH_TOKEN}`;

export const UnsplashProvider = ({ children }) => {
  const initialState = {
    photos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(UnsplashReducer, initialState);

  // Get search Results
  const searchPhotos = async (text) => {
    // eslint-disable-next-line no-use-before-define

    setLoading();
    const params = new URLSearchParams({
      query: text,
      per_page: 10,
      order_by: 'popular',
      // orientation: 'landscape',
    });
    const response = await fetch(`${UNSPLASH_URL}/search/photos?${params}`, {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_TOKEN}`,
      },
    });

    console.log(response, 'response');

    const { results } = await response.json();

    dispatch({ type: 'GET_PHOTOS', payload: results });
  };

  const clearPhotos = () => dispatch({ type: 'CLEAR_PHOTOS' });

  // Set loading

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UnsplashContext.Provider value={{ photos: state.photos, loading: state.loading, searchPhotos, clearPhotos }}>
      {children}
    </UnsplashContext.Provider>
  );
};

export default UnsplashContext;
