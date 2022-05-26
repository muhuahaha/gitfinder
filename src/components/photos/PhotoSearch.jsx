import { useState, useContext } from 'react';
import UnsplashContext from '../../context/unsplash/UnsplashContext';
import AlertContext from '../../context/alert/AlertContext';

function PhotoSearch() {
  const [text, setText] = useState('');

  const { photos, searchPhotos, clearPhotos } = useContext(UnsplashContext);
  console.log(photos);

  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === '') {
      // alert('Please enter something');

      setAlert('Please enter something', 'error');
    } else {
      searchPhotos(text);
      setText('');
    }
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black rounded-md"
                placeholder="search"
                value={text}
                onChange={handleChange}
              />
              <button type="submit" className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg rounded-md">
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        {photos.length}
        {photos.length > 0 && (
          <button type="button" className="btn-ghost btn-lg" onClick={clearPhotos}>
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default PhotoSearch;
