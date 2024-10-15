import "./Navbar.css";

import { Link, useLocation } from "react-router-dom";
import { PiStarFour } from "react-icons/pi";

interface Props {
  setLoaded: any;
  setHover: any;
}

function Navbar({ setLoaded, setHover }: Props) {
  const pages = [
    ["Home", "/"],
    ["Projects", "/projects"],
    ["Table Tennis", "/table-tennis"],
    ["Contacts", "/contacts"],
  ];

  // List of pages
  const location = useLocation().pathname;
  return (
    <div className="flex items-center p-3">
      <h1 className="text-3xl mx-auto">
        <span id="name">Stanley Hsu</span>
        <span id="label"> | Portfolio</span>
      </h1>

      <ul className="flex text-l mx-auto items-center">
        {pages.map((page) => {
          if (location == page[1]) {
            return (
              <PiStarFour
                style={{
                  color: "var(--white)",
                  height: 16,
                  width: 16,
                  margin: 24,
                }}
              />
            );
          } else {
            return (
              <li
                id="page-list"
                className="page-list-normal"
                key={page[0]}
                onMouseEnter={() => {
                  setHover(true);
                }}
                onMouseLeave={() => {
                  setHover(false);
                }}
              >
                <Link
                  className="cursor-none"
                  to={page[1]}
                  onClick={() => {
                    setLoaded(false);
                    setHover(false);
                  }}
                >
                  {page[0]}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default Navbar;
