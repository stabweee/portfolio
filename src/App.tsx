import "./App.css";
import Cursor from "./components/cursor/Cursor";
import Canvas from "./components/canvas/Canvas";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import TableTennis from "./components/tabletennis/TableTennis";
import Contacts from "./components/contacts/Contacts";

import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const media = window.matchMedia("(max-width: 850px)");

  const [, setLoaded] = useState(false);
  const [hover, setHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1100); // Adjust breakpoint as needed
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const frameLines = (
    <>
      <div id="frame-line-x" className="w-full h-px left-0 top-0"></div>
      <div id="frame-line-y" className="w-px h-full top-0 right-0"></div>
      <div id="frame-line-x" className="w-full h-px left-0 bottom-0"></div>
      <div id="frame-line-y" className="w-px h-full left-0 top-0"></div>
    </>
  );
  const header = <Header isMobile={isMobile} />;
  const projects = <Projects setHover={setHover} />;
  const tabletennis = <TableTennis />;
  const contacts = <Contacts setHover={setHover} isMobile={isMobile} />;
  const navbar = (
    <Navbar setLoaded={setLoaded} setHover={setHover} isMobile={isMobile} />
  );
  const canvas = <Canvas />;
  const cursor = <Cursor hover={hover} />;

  return (
    <div id="background">
      {!isMobile && canvas}
      <div id="frame">
        {!isMobile && frameLines}
        {!media.matches && cursor}
        {navbar}
        <div
          className={
            isMobile
              ? "absolute mt-10 h-4/6 w-full flex justify-center"
              : "content-container"
          }
        >
          <Routes>
            <Route path="/" element={header} />
            <Route path="/projects" element={projects} />
            <Route path="/table-tennis" element={tabletennis} />
            <Route path="/contacts" element={contacts} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
