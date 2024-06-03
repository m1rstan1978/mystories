import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useCursor = () => useState("use_cursor", () => null);
export const useVeriableAnimationLine = () => useState("use_line", () => null);
export const useRegPlugin = () => useState("use_plugin", () => null);
export const useVariebleLookbook = () => useState("use_lookbook", () => null);
export const useCheckAnimation = () =>
  useState("use_check_animation", () => false);

export const useCheckAnimationArr = () =>
  useState("use_check_animation_arr", () => []);

const animationsArrGsap = [];

export const useGsapAnimationOpacity = (arr, triggerEl, startMarker) => {
  if (!Array.isArray(arr)) {
    return;
  }

  arr.forEach((el, idx) => {
    const animation = gsap.to(el, {
      scrollTrigger: {
        trigger: triggerEl,
        start: `top ${startMarker ? "90%" : "80%"}`,
        markers: false,
      },
      delay: 0,
      opacity: 1,
      ease: "none",
      duration: 1,
    });
    animationsArrGsap.push(animation);
    useCheckAnimationArr().value = animationsArrGsap;
  });
};
