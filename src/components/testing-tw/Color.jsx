import { useEffect, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ColorItem from './ColorItem';
import Box from '../animation/Box';
import Container from '../animation/Container';
import FadeIn from '../animation/FadeIn';

gsap.registerPlugin(ScrollTrigger);

function Color({ PokemonTypeMap: { dark, ghost, normal, psychic } }) {
  console.log(dark);
  console.log(ghost);

  console.log(normal);
  console.log(psychic);
  // console.log(TailwindColors);

  const colors = [
    'red-50',
    'red-100',
    'red-200',
    'red-300',
    'red-400',
    'red-500',
    'red-600',
    'red-700',
    'red-800',
    'red-900',
    'green-500',
    'blue-500',
    'orange-500',
    'yellow-500',
    'purple-500',
    'lime-500',
    'emerald-500',
    'teal-500',
    'cyan-500',
    'indigo-500',
    'violet-500',
    'fuchsia-500',
    'pink-500',
    'rose-500',
    'sky-500',
    'gray-500',
    'slate-500',
    'zinc-500',
    'neutral-500',
    'stone-500',
    'amber-500',
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
      yoyo: true,
    });

    // eslint-disable-next-line no-use-before-define
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
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
            markers: true,
          },
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

  return (
    <div className="mt-12 m-x">
      <div>
        {' '}
        <div>
          <button type="button" onClick={toggle}>
            Toggle
          </button>
        </div>
      </div>
      <FadeIn stagger={0.3} x={200} opacity={1} ref={animation}>
        {colors.map((color, i) => (
          <ColorItem key={i} color={color} />
        ))}
      </FadeIn>
      <div className="container">
        <Box ref={box1}>Box</Box>
        <Container />
        <Box ref={box2}>Box</Box>
      </div>
      <div className="container bg-zinc-100 p-4">
        {colors.map((color, i) => (
          <ColorItem key={i} color={color} ref={addToRefs} />
        ))}
      </div>
      <div className={`${pokemonType.classes} p-3 m-3 px-3 rounded-3xl leading-6 lowercase text-sm font-['Open_Sans']`}>
        {pokemonType.text}
      </div>
    </div>
  );
}

Color.propTypes = { PokemonTypeMap: PropTypes.object.isRequired };

export default Color;
