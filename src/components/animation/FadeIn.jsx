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
        x,
      },
      {
        opacity: 1,
        stagger,

        x: 0,
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
    <div className="flex flex-col space-y-4" ref={el}>
      {children}
    </div>
  );
});

FadeIn.displayName = 'FadeIn';

export default FadeIn;
