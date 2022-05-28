import UtilityFirst from '../components/testing-tw/UtilityFirst';
import Color from '../components/testing-tw/Color';
import ContainerSpacing from '../components/testing-tw/ContainerSpacing';

import PokemonTypeMap from './pokemonTypeMap.json';

function Tailwind() {
  console.log(PokemonTypeMap);
  return (
    <div>
      <UtilityFirst />
      <Color PokemonTypeMap={PokemonTypeMap} />
      <ContainerSpacing />
    </div>
  );
}

export default Tailwind;
