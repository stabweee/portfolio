import "./Cursor.css";

import { useState, useEffect } from "react";

import { motion, backOut } from "framer-motion";

function Cursor({ hover }: { hover: number | boolean }) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  });

  useEffect(() => {
    if (hover) {
      setCursorVariant("hover");
    } else {
      setCursorVariant("default");
    }
  });

  return (
    <motion.div
      id="cursor"
      initial="default"
      variants={{
        default: {
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
        },
        hover: {
          height: 40,
          width: 40,
          x: mousePosition.x - 50,
          y: mousePosition.y - 50,
          backgroundColor: "#0D0D0D",
          mixBlendMode: "difference",
        },
      }}
      animate={cursorVariant}
      transition={{ type: "tween", ease: backOut, duration: 0.5 }}
      whileTap={{ scale: 0.75 }}
    />
  );
}

export default Cursor;
