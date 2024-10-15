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

    if (hover) {
      setCursorVariant("hover");
    } else {
      setCursorVariant("default");
    }

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  });
  return (
    <motion.div
      className="absolute"
      id="cursor"
      initial="default"
      variants={{
        default: {
          x: mousePosition.x - 48,
          y: mousePosition.y - 48,
        },
        hover: {
          x: mousePosition.x - 48,
          y: mousePosition.y - 48,
          backgroundColor: "#0D0D0D",
          mixBlendMode: "difference",
        },
      }}
      animate={cursorVariant}
      transition={{ type: "tween", ease: backOut, duration: 0 }}
    />
  );
}

export default Cursor;
