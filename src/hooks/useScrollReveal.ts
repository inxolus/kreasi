import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  y?: number;
  x?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  ease?: string;
  start?: string;
  scale?: number;
}

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      y = 40,
      x = 0,
      opacity = 0,
      duration = 0.8,
      delay = 0,
      stagger = 0.1,
      ease = 'power3.out',
      start = 'top 85%',
      scale,
    } = options;

    const children = el.children.length > 1 ? Array.from(el.children) : [el];

    const animProps: gsap.TweenVars = {
      opacity: opacity,
      y: y,
      x: x,
      duration: duration,
      delay: delay,
      stagger: stagger,
      ease: ease,
    };

    if (scale !== undefined) {
      animProps.scale = scale;
    }

    gsap.set(children, animProps);

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: start,
      once: true,
      onEnter: () => {
        gsap.to(children, {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: duration,
          delay: delay,
          stagger: stagger,
          ease: ease,
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return ref;
}

export function useParallax<T extends HTMLElement>(speed: number = 0.15) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        const yPos = (self.progress - 0.5) * speed * 100;
        gsap.set(el, { y: yPos });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [speed]);

  return ref;
}

export function useCountUp<T extends HTMLElement>(
  target: number,
  duration: number = 2,
  suffix: string = ''
) {
  const ref = useRef<T>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        const obj = { value: 0 };
        gsap.to(obj, {
          value: target,
          duration: duration,
          ease: 'power2.out',
          onUpdate: () => {
            if (el) {
              el.textContent = Math.round(obj.value) + suffix;
            }
          },
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [target, duration, suffix]);

  return ref;
}
