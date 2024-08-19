import "./Hero.css";
import { ReactTyped } from "react-typed";

function Hero() {
  const name = "<strong>Stanley Hsu</strong>";
  const portfolio_txt = '<span style="font-weight: 100"> | Portfolio</span>';

  return (
    <div
      className="h-screen w-screen flex items-center justify-center"
      id="background"
    >
      <div
        id="frame"
        className="border border-white flex items-center justify-center"
      >
        <div id="name" className="text-3xl">
          <ReactTyped strings={[name + portfolio_txt]} typeSpeed={40} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
