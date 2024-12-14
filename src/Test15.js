import { useEffect } from "react";
import { useRef, useState } from "react";

import ObserverProvider, { ObserverContext, useObserver } from "./useObserver";
export default function Test() {
  return (
    <ObserverProvider>
      <P />
    </ObserverProvider>
  );
  //   useEffect(() => {
  //     const observer = new IntersectionObserver(
  //       (intersections) => {
  //         intersections.forEach(({ target, intersectionRatio, boundingClientRect }) => {
  //           console.log(intersectionRatio.toFixed(2));
  //           target.classList.toggle("bg-blue-200");
  //         });
  //       },
  //       {
  //         threshold: Array.from({ length: 1000 }, (_, i) => i / 1000),
  //       }
  //     );
  //     document.querySelectorAll(".main").forEach((div) => {
  //       observer.observe(div);
  //     });
  //   }, []);
}

const P = () => {
  const ref = useRef(null);

  const { progress } = useObserver(ref.current);

  return (
    <div className="h-screen w-[400vw] flex">
      <div className="w-[100vw] h-full"></div>
      <div className="w-[100vw] h-full">
        <div ref={ref} className="w-20 h-20 bg-red-100 main">
          {progress}
        </div>
      </div>
    </div>
  );
};
