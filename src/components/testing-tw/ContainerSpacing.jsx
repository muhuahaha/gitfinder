import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function ContainerSpacing() {
  const boxRef = useRef();

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.to(boxRef.current, { rotation: '360' });
  });
  return (
    <div className="container mx-auto">
      <article className="bg-slate-300">
        <h3 ref={boxRef}>Article One</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laboriosam libero molestiae recusandae
          accusantium voluptates? Expedita dignissimos amet eveniet dolore nobis odio a sunt, maiores quasi. Modi amet
          quos dolores!
        </p>
      </article>
    </div>
  );
}

export default ContainerSpacing;
