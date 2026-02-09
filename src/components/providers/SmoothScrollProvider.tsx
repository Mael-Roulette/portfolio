"use client";

import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useEffect } from "react";

gsap.registerPlugin( ScrollTrigger );

export default function SmoothScrollProvider ( {
  children,
}: {
  children: ReactNode;
} ) {
  useEffect( () => {
    const lenis = new Lenis( {
      duration: 1.2,
      easing: ( t ) => Math.min( 1, 1.001 - Math.pow( 2, -10 * t ) ),
      smoothWheel: true,
    } );

    function raf ( time: number ) {
      lenis.raf( time );
      ScrollTrigger.update();
      requestAnimationFrame( raf );
    }

    requestAnimationFrame( raf );

    return () => {
      lenis.destroy();
    };
  }, [] );

  return <>{children}</>;
}
