/* eslint-disable no-use-before-define */
import { useContext } from 'react';
import PhotoItem from './PhotoItem';
import UnsplashContext from '../../context/unsplash/UnsplashContext';

function PhotoResults() {
  const { photos, loading } = useContext(UnsplashContext);

  console.log(photos, 'photos');

  if (!loading) {
    return (
      <div className="masonry sm:masonry-sm md:masonry-md">
        {photos.map((photo) => (
          <PhotoItem key={photo.id} photo={photo} />
        ))}
      </div>
    );
  }
}

export default PhotoResults;
