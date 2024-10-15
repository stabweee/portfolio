import "./Hero.css";
import { Reveal } from "../reveal/Reveal";

import { useEffect } from "react";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";

import { easeInOut, motion, useAnimation } from "framer-motion";

interface Props {
  loaded: any;
  setLoaded: any;
  hoverInfo: any;
  setHoverInfo: any;
}

function Hero({ loaded, setLoaded, hoverInfo, setHoverInfo }: Props) {
  // Initialize variables
  const pages = [
    ["About Me", "/about"],
    ["Projects", "/projects"],
    ["Table Tennis", "/table-tennis"],
    ["Contacts", "/contacts"],
  ];
  const name = "<span style='font-weight: 375'>Stanley Hsu</span>";
  const portfolio_txt = '<span style="font-weight: 100"> | Portfolio</span>';
  const [frameHeight, frameWidth] = [
    window.innerHeight - 16,
    window.innerWidth - 16,
  ];

  // Displaying three.js animation
  const canvas = (
    <canvas
      className="absolute"
      id="canvas"
      data-engine="three.js r167"
      width={frameWidth}
      height={frameHeight}
    />
  );

  // Typewriter animation
  const controls = useAnimation();
  useEffect(() => {
    if (loaded) {
      controls.start("loaded");
    }
  });
  const intro = (
    <motion.div
      className="intro"
      variants={{
        intro: { y: -30 },
        loaded: { y: -180 },
      }}
      initial="intro"
      animate={controls}
      transition={{ duration: 0.5, ease: easeInOut }}
    >
      <ReactTyped
        strings={[name + portfolio_txt]}
        typeSpeed={50}
        onComplete={() => {
          setLoaded(true);
        }}
      />
    </motion.div>
  );

  // Draw frame lines
  const frameLines = (
    <>
      <div id="frame-line-x" className="w-full h-px left-0 top-0"></div>
      <div id="frame-line-y" className="w-px h-full top-0 right-0"></div>
      <div id="frame-line-x" className="w-full h-px left-0 bottom-0"></div>
      <div id="frame-line-y" className="w-px h-full left-0 top-0"></div>
    </>
  );

  // List of pages
  const pageList = (
    <ul className="text-2xl text-center absolute left-0 right-0 bottom-20 mx-auto w-48">
      {pages.map((page, index) => (
        <Reveal delay={0.15 * index}>
          <li
            id={
              hoverInfo[0] === true && hoverInfo[1] === index
                ? "page-list-big"
                : "page-list-normal"
            }
            key={page[0]}
            onMouseEnter={() => {
              setHoverInfo([true, index]);
            }}
            onMouseLeave={() => {
              setHoverInfo([false, -1]);
            }}
          >
            <Link
              className="cursor-none"
              to={page[1]}
              onClick={() => {
                setHoverInfo([false, -1]);
              }}
            >
              {page[0]}
            </Link>
          </li>
        </Reveal>
      ))}
    </ul>
  );

  // Draw hero
  const hero = (
    <>
      {canvas}
      {frameLines}
      {pageList}
    </>
  );

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {intro}
      {loaded && hero}
    </div>
  );
}

export default Hero;
