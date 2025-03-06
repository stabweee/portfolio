import "./Header.css";

interface Props {
  isMobile: any;
}

function Header({ isMobile }: Props) {
  return (
    <div
      className={isMobile ? "about-text" : "about-text nonmobile-about-text"}
    >
      <h1 className="w-4/6">
        High school junior in the magnet program at Montgomery Blair High School
        with strong success in college-level curriculum centered around STEM
        coursework. Searching for opportunities to deepen understanding and
        build upon my creative and critical thinking skills in the realm of
        machine learning, data science, and statistics.
      </h1>
    </div>
  );
}

export default Header;
