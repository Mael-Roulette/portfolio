"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CursorFollower () {
  const cursorRef = useRef<HTMLDivElement | null>( null );

  useEffect( () => {
    if ( !cursorRef.current ) return;

    const cursor = cursorRef.current;

    gsap.set( cursor, { xPercent: -50, yPercent: -50 } );

    const move = ( e: MouseEvent ) => {
      gsap.to( cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: "expo.out",
      } );
    };

    const enterProject = () => {
      gsap.to( cursor, { scale: 2.4, duration: 0.3, ease: "power3.out" } );
    };

    const leaveProject = () => {
      gsap.to( cursor, { scale: 1, duration: 0.3, ease: "power3.out" } );
    };

    window.addEventListener( "mousemove", move, { passive: true } );

    const targets = document.querySelectorAll( ".project-card" );
    targets.forEach( ( el ) => {
      el.addEventListener( "mouseenter", enterProject );
      el.addEventListener( "mouseleave", leaveProject );
    } );

    return () => {
      window.removeEventListener( "mousemove", move );
      targets.forEach( ( el ) => {
        el.removeEventListener( "mouseenter", enterProject );
        el.removeEventListener( "mouseleave", leaveProject );
      } );
    };
  }, [] );

  return (
    <div
      ref={ cursorRef }
      className="pointer-events-none fixed top-0 left-0 z-[9999]
                 h-8 w-8 rounded-full bg-secondary mix-blend-difference
                 flex items-center justify-center"
    >
    </div>
  );
}
