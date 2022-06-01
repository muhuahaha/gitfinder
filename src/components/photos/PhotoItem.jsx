import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PhotoItem({ photo: { urls, user, tags } }) {
  console.log(user, 'user');
  return (
    <div>
      {' '}
      <img className="break-inside rounded-lg p-4" src={urls.small} alt="" />
      <div className="avatar p-4">
        <div className="h-14 w-14 rounded-full shadow">
          <img src={user.profile_image.medium} alt="Profile" />
        </div>
      </div>
      <h1 className="p-4">{user.username}</h1>
      {/* <div className="p-4">
        {tags.map((tag) => (
          <p>{tag.title}</p>
        ))}
      </div> */}
      <div>
        {' '}
        <Link className="text-base-content text-opacity-40" to={`/unsplashuser/${user.username}`}>
          Visit Profile
        </Link>
      </div>
    </div>
  );
}

PhotoItem.propTypes = { photo: PropTypes.object.isRequired };

export default PhotoItem;
