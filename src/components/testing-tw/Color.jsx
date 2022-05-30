import { useEffect, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ColorItem from './ColorItem';
import Box from '../animation/Box';
import Container from '../animation/Container';
import FadeIn from '../animation/FadeIn';
import useWindowDimensions from '../hooks/windowDimensions';

gsap.registerPlugin(ScrollTrigger);

function Color({ PokemonTypeMap: { dark, ghost, normal, psychic } }) {
  console.log(dark);
  console.log(ghost);

  console.log(normal);
  console.log(psychic);
  // console.log(TailwindColors);

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
    'amber'
  ];

  // const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
  const pokemonType = psychic;
  console.log(pokemonType, 'pokeomn');

  const box1 = useRef();
  const box2 = useRef();

  useEffect(() => {
    const boxes = [box1.current, box2.current];

    // Target the two specific elements we have forwarded refs to
    gsap.to(boxes, {
      x: 100,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true
    });

    // eslint-disable-next-line no-use-before-define
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0
        },
        {
          duration: 1,
          autoAlpha: 1,

          ease: 'none',
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=100',
            toggleActions: 'play none none reverse',
            markers: true
          }
        }
      );
    });
  }, []);

  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
    console.log(revealRefs.current);
  };

  const animation = useRef();

  const toggle = () => {
    animation.current.reversed(!animation.current.reversed());
  };

  const { height, width } = useWindowDimensions();

  return (
    <div className="m-x 2xl:bg-red-500 2xl:bg-orange-600 mt-12 bg-purple-100 sm:bg-green-200 md:bg-fuchsia-400 lg:bg-indigo-500 xl:bg-sky-400">
      <div>
        <h1 className="text-4xl">
          h:{height} / w:{width}
        </h1>
        <div>
          <button type="button" onClick={toggle} className="btn-blue">
            Toggle
          </button>
        </div>
      </div>
      <div className="container">
        <FadeIn stagger={0.3} x={200} opacity={1} ref={animation}>
          {colors.map((color, i) => (
            <ColorItem key={i} color={color} />
          ))}
        </FadeIn>
      </div>
      {/* <div className="container bg-zinc-100 p-4">
        {colors.map((color, i) => (
          <ColorItem key={i} color={color} ref={addToRefs} />
        ))}
      </div> */}
      <div
        className={`${pokemonType.classes} container mt-3 rounded-3xl p-3 px-3 font-['Open_Sans'] text-sm lowercase leading-6`}>
        {pokemonType.text}
      </div>
      <div>
        <Box ref={box1}>Box</Box>
        <Container />
        <Box ref={box2}>Box</Box>
      </div>
    </div>
  );
}

Color.propTypes = { PokemonTypeMap: PropTypes.object.isRequired };

export default Color;
