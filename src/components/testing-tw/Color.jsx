import React from 'react';
import PropTypes from 'prop-types';
import ColorItem from './ColorItem';
// import PokemonTypeMap from './pokemonTypeMap.json';
import TailwindColors from './twColors.json';

function Color({ PokemonTypeMap: { dark, ghost, normal, psychic } }) {
  console.log(dark);
  console.log(ghost);

  console.log(normal);
  console.log(psychic);
  console.log(TailwindColors);

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
  const pokemonType = psychic;
  console.log(pokemonType, 'pokeomn');

  const testColor = TailwindColors.fuchsia;
  console.log(testColor);

  return (
    <div className="mt-12">
      <div className="flex flex-col bg-zinc-100 p-3">
        {colors.map((color) => shades.map((shade, i) => <ColorItem key={i} color={color} shade={shade} />))}
      </div>
      <span className={`${pokemonType.classes} p-1 px-3 rounded-3xl leading-6 lowercase text-sm font-['Open_Sans']`}>
        {pokemonType.text}
      </span>
    </div>
  );
}

Color.propTypes = { PokemonTypeMap: PropTypes.object.isRequired };

export default Color;
