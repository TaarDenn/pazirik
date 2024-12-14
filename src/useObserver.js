import { useEffect, useState, createContext, useContext, useRef } from "react";

export const ObserverContext = createContext({ mounted: false });

export default function ObserverProvider({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  return (
    <ObserverContext.Provider value={mounted}>
      {children}
    </ObserverContext.Provider>
  );
}

export const useObserver = (target, smooth = false, vertical = false) => {
  const [progress, setProgress] = useState(0);
  // const ref = useRef(null);
  //   const [state, setState] = useState({
  //     progress: 0,
  //   });
  //   const tar = target.getBoundingClientRect();
  const mounted = useContext(ObserverContext);

  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      (entry) => {
        const { intersectionRatio } = entry[0];
        if (!vertical) {
          if (
            entry[0].intersectionRect.width < window.innerWidth &&
            entry[0].intersectionRect.x !== 0
          ) {
            // state.beforeMax = false;
            setProgress(intersectionRatio.toFixed(2 + (smooth ? 1 : 0)));
          }
        } else {
          if (
            entry[0].intersectionRect.height <= window.innerHeight &&
            entry[0].intersectionRect.y !== 0
          ) {
            // state.beforeMax = false;
            setProgress(intersectionRatio.toFixed(2 + (smooth ? 1 : 0)));
          }
        }

        // setState((prev) => {
        //   const state = { ...prev };
        //   state.progress = intersectionRatio.toFixed(2 + (smooth ? 1 : 0));

        //   if (
        //     prev.progress == 0 &&
        //     prev.isEnter === true &&
        //     prev.isExit === true
        //   ) {
        //     state.isEnter = false;
        //     state.isExit = false;
        //   }
        //   if (
        //     prev.progress == 0 &&
        //     prev.isEnter === true &&
        //     prev.isExit === false
        //   ) {
        //     state.isEnter = true;
        //     state.isExit = true;
        //   }
        //   if (
        //     prev.progress > 0 &&
        //     prev.isEnter === false &&
        //     prev.isExit === false
        //   ) {
        //     state.isEnter = true;
        //     state.isExit = false;
        //   }
        //   return state;
        // })
      },
      {
        rootMargin: "0%",
        threshold: Array.from(
          { length: 1000 * (smooth ? 10 : 1) },
          (_, i) => i / (1000 * (smooth ? 10 : 1))
        ),
      }
    );

    if (target) observer.observe(target);

    // return () => target && observer.unobserve(target);
  }, [mounted, window.innerWidth]);

  return { progress };
};
