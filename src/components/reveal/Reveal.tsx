import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useAnimation,
  easeIn,
  easeOut,
} from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  delay: GLfloat;
}

export const Reveal = ({ children, width = "100%", delay = 0 }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const start = () => {
    mainControls.start("visible");
    slideControls.start("visible");
  };

  useEffect(() => {
    if (isInView) {
      setTimeout(start, delay * 1000);
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: 0.25,
          ease: easeOut,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, left: 0 },
          visible: { opacity: 1, left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: easeIn }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "var(--white)",
          zIndex: 20,
        }}
      />
    </div>
  );
};
