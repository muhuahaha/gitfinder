import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ColorItem = forwardRef(({ color }, ref) => (
  <div className={`bg-${color} p-3 m-3 h-10 w-24`} ref={ref}>
    {color}
  </div>
));

ColorItem.displayName = 'ColorItem';

ColorItem.propTypes = { color: PropTypes.string.isRequired };

export default ColorItem;
