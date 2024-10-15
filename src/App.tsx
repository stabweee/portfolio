import "./App.css";
import Cursor from "./components/cursor/Cursor";
import Canvas from "./components/canvas/Canvas";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import TableTennis from "./components/tabletennis/TableTennis";
import Contacts from "./components/contacts/Contacts";

import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const media = window.matchMedia("(max-width: 850px)");

  const [, setLoaded] = useState(false);
  const [hover, setHover] = useState(false);

  const frameLines = (
    <>
      <div id="frame-line-x" className="w-full h-px left-0 top-0"></div>
      <div id="frame-line-y" className="w-px h-full top-0 right-0"></div>
      <div id="frame-line-x" className="w-full h-px left-0 bottom-0"></div>
      <div id="frame-line-y" className="w-px h-full left-0 top-0"></div>
    </>
  );
  const header = <Header />;
  const projects = <Projects setHover={setHover} />;
  const tabletennis = <TableTennis />;
  const contacts = <Contacts setHover={setHover} />;
  const navbar = <Navbar setLoaded={setLoaded} setHover={setHover} />;
  const canvas = <Canvas />;
  const cursor = <Cursor hover={hover} />;

  return (
    <div id="background">
      {canvas}
      <div id="frame">
        {frameLines}
        {!media.matches && cursor}
        {navbar}
        <Routes>
          <Route path="/" element={header} />
          <Route path="/projects" element={projects} />
          <Route path="/table-tennis" element={tabletennis} />
          <Route path="/contacts" element={contacts} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
