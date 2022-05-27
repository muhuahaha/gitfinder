import React from 'react';

function ColorItem({ color, shade }) {
  return (
    <div className={`bg-${color}-${shade}`}>
      {color} {shade}
    </div>
  );
}

export default ColorItem;
