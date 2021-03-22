import {
  EffectCallback,
  DependencyList,
  useState,
  useEffect,
  useRef,
} from 'react';

const useDelayedEffect = (
  effect: EffectCallback,
  deps?: DependencyList,
  delaytime = 500,
): void => {
  const [waiting, setWaiting] = useState(false);
  const timer = useRef<number>();
  useEffect(() => {
    window.clearTimeout(timer.current);

    setWaiting(true);

    timer.current = window.setTimeout(() => {
      setWaiting(false);
    }, delaytime);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    if (!waiting) {
      effect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [waiting]);
};

export default useDelayedEffect;
