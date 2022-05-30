import React from 'react';
import PropTypes from 'prop-types';
import Box from './Box';

function Container({ children }) {
  return (
    <div>
      <Box>Don't Animate Me {children}</Box>
    </div>
  );
}
Container.propTypes = { children: PropTypes.node };

export default Container;
