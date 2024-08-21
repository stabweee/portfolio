import "./Header.css";
import { Reveal } from "../reveal/Reveal";
import Cursor from "../cursor/Cursor";

import { useState } from "react";
import { ReactTyped } from "react-typed";

function Header() {
  // const media = window.matchMedia("(max-width: 850px)");

  // Initialize variables
  const pages = ["About Me", "Projects", "Table Tennis", "Contacts"];
  const name = "<span style='font-weight: 375'>Stanley Hsu</span>";
  const portfolio_txt = '<span style="font-weight: 100"> | Portfolio</span>';
  const [loaded, setLoaded] = useState(false);
  const [hoverInfo, setHoverInfo] = useState([false, -1]);
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
  const intro = (
    <ReactTyped
      className="intro"
      strings={[name + portfolio_txt]}
      typeSpeed={50}
      onComplete={() => {
        setLoaded(true);
      }}
    />
  );
  const moveIntro = (intro: JSX.Element) => {
    document.getElementsByClassName("intro")[0].classList.add("move-up");
    return intro;
  };

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
            key={page}
            onMouseEnter={() => {
              setHoverInfo([true, index]);
            }}
            onMouseLeave={() => {
              setHoverInfo([false, -1]);
            }}
            onClick={() => {
              console.log("clicked");
            }}
          >
            {page}
          </li>
        </Reveal>
      ))}
    </ul>
  );

  // Draw frame
  const frame = (
    <div id="frame" className="fixed overflow-hidden">
      {loaded === true ? <Cursor hover={hoverInfo[0]} /> : null}
      {frameLines}
      {pageList}
    </div>
  );

  // Draw hero
  const hero = (
    <>
      {canvas}
      {frame}
    </>
  );

  return (
    <>
      <div
        className="h-screen w-screen flex items-center justify-center"
        id="background"
      >
        {loaded === true ? moveIntro(intro) : intro}
        {loaded === true ? hero : null}
      </div>
    </>
  );
}

export default Header;
