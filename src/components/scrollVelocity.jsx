import "../styles/scrollVelocity.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

function useScrollVelocity(scrollY) {
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, {
    damping: 50,
    stiffness: 400,
  });
  return smoothVelocity;
}

function ParallaxText({ children, baseVelocity = 10 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();

  const smoothVelocity = useScrollVelocity(scrollY);
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="main-parallax">
      <motion.div className="main-scroller" style={{ x }}>
        <span className="main-parallax">{children}</span>
        <span className="main-parallax">{children}</span>
        <span className="main-parallax">{children}</span>
        <span className="main-parallax">{children}</span>
      </motion.div>
    </div>
  );
}

function MainComponent() {
  return (
    <section>
      <ParallaxText baseVelocity={-3}>
        •  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Just showing off with this scroll &nbsp; &nbsp; &nbsp;{" "}
      </ParallaxText>
      <ParallaxText baseVelocity={3}>
        •  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Scroll to see more &nbsp; &nbsp; &nbsp;{" "}
      </ParallaxText>
    </section>
  );
}

export default MainComponent;
