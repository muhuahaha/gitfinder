import UtilityFirst from '../components/testing-tw/UtilityFirst';
import Color from '../components/testing-tw/Color';
import ContainerSpacing from '../components/testing-tw/ContainerSpacing';
import EmailSubscribe from '../components/testing-tw/EmailSubscribe';

import PokemonTypeMap from './pokemonTypeMap.json';

function Tailwind() {
  console.log(PokemonTypeMap);
  return (
    <div>
      <UtilityFirst />
      <Color PokemonTypeMap={PokemonTypeMap} />
      <ContainerSpacing />
      <EmailSubscribe />
    </div>
  );
}

export default Tailwind;
