import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ColorItem = forwardRef(({ color }, ref) => (
  <div
    className={`bg-${color}-200 first:col-span-3 last:col-span-2 hover:scale-105 hover:bg-green-300`}
    ref={ref}>
    <h2>{color}</h2>
  </div>
));

ColorItem.displayName = 'ColorItem';

ColorItem.propTypes = { color: PropTypes.string.isRequired };

export default ColorItem;
