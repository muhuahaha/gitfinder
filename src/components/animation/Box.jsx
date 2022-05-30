import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Box = forwardRef(({ children }, ref) => (
  <div className="box bg-pink-600 m-10" ref={ref}>
    {children}
  </div>
));

Box.displayName = 'MyBox';

Box.propTypes = { children: PropTypes.node.isRequired };

export default Box;
