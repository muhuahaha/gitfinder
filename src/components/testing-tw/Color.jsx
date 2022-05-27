import React from 'react';
import ColorItem from './ColorItem';

function Color() {
  const colors = [
    'red',
    'green',
    'blue',
    'orange',
    'yellow',
    'purple',
    'lime',
    'emerald',
    'teal',
    'cyan',
    'indigo',
    'violet',
    'fuchsia',
    'pink',
    'rose',
    'sky',
    'gray',
    'slate',
    'zinc',
    'neutral',
    'stone',
    'amber',
  ];

  const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];

  return (
    <div className="mt-12">
      <div className="flex flex-col bg-zinc-100 p-3">
        {colors.map((color) => shades.map((shade, i) => <ColorItem key={i} color={color} shade={shade} />))}
      </div>
      <div className="bg-violet-900">asd</div>
    </div>
  );
}

export default Color;
