import React from 'react';
import PropTypes from 'prop-types';

function PhotoItem({ photo: { urls, user, tags } }) {
  return (
    <div>
      {' '}
      <img className="rounded-lg p-4 break-inside" src={urls.small} alt="" />
      <div className="avatar p-4">
        <div className="rounded-full shadow w-14 h-14">
          <img src={user.profile_image.medium} alt="Profile" />
        </div>
      </div>
      <h1 className="p-4">{user.name}</h1>
      <div className="p-4">
        {tags.map((tag) => (
          <p>{tag.title}</p>
        ))}
      </div>
    </div>
  );
}

PhotoItem.propTypes = { photo: PropTypes.object.isRequired };

export default PhotoItem;
