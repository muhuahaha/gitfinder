import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Box = forwardRef(({ children }, ref) => (
  <div className="box m-10 bg-pink-600" ref={ref}>
    {children}
  </div>
));

Box.displayName = 'MyBox';

Box.propTypes = { children: PropTypes.node.isRequired };

export default Box;
