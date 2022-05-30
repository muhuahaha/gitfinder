import { useLayoutEffect, useEffect, useRef, forwardRef } from 'react';
import gsap from 'gsap';

const FadeIn = forwardRef(({ children, stagger = 0, x = 0 }, ref) => {
  const el = useRef();
  const animation = useRef();

  useLayoutEffect(() => {
    animation.current = gsap.fromTo(
      el.current.children,
      {
        opacity: 0,
        x
      },
      {
        opacity: 1,
        x: 0,
        stagger: {
          // wrap advanced options in an object
          each: 0.1,
          from: 'random',
          grid: 'auto',
          ease: 'power2.inOut'
        }
      }
    );
  }, []);

  useEffect(() => {
    // forward the animation instance
    if (typeof ref === 'function') {
      ref(animation.current);
    } else if (ref) {
      ref.current = animation.current;
    }
  }, [ref]);

  return (
    <div className="grid grid-cols-6 gap-2" ref={el}>
      {children}
    </div>
  );
});

FadeIn.displayName = 'FadeIn';

export default FadeIn;
