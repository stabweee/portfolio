import "./Contacts.css";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

interface Props {
  setHover: any;
}

function Contacts({ setHover }: Props) {
  const iconStyle = { height: 100, width: 100, margin: 4 };

  return (
    <div id="contacts-container">
      <div id="contacts-list">
        <div
          id="icon"
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          onClick={() => window.open("https://mailto:stanleyhsu2008@gmail.com")}
        >
          <MdEmail style={iconStyle} />
          <h1 className="text-center">Gmail</h1>
        </div>
        <div
          id="icon"
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          onClick={() => window.open("https://github.com/stabweee")}
        >
          <FaGithubSquare style={iconStyle} />
          <h1 className="text-center">Github</h1>
        </div>
        <div
          id="icon"
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          onClick={() =>
            window.open("https://www.linkedin.com/in/stanley-hsu-2b881a314/")
          }
        >
          <FaLinkedin style={iconStyle} />
          <h1 className="text-center">LinkedIn</h1>
        </div>
        <div
          id="icon"
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          onClick={() => window.open("https://www.instagram.com/stableyhsu35/")}
        >
          <FaInstagram style={iconStyle} />
          <h1 className="text-center">Instagram</h1>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
