import "./TableTennis.css";

function TableTennis() {
  const award_list = {
    "World Youth Championships": ["2023 U15 Boys' Doubles Quarterfinalist"],
    "Pan American Championships": [
      "2023 U15 Boys' Doubles Champion",
      "2023 U15 Boys' Singles, Team Silver Medalist",
      "2021 U13 Boys’ Teams, Mixed Doubles Silver Medalist",
    ],
    "World Table Tennis": ["2023 Charleston U15 Boys' Singles Silver Medalist"],
    "USA National Championships": [
      "2024 U17 National Team Champion",
      "2023 U15 Boys' Singles, Doubles, Mixed Doubles Champion",
      "2021 U13 Boys' Singles Champion",
    ],
    "USA National Team": [
      "2024 U19, U17 National Team Member",
      "2023 U17, U15 National Team Member",
      "2022 U17, U15 National Team Member",
      "2021 U13, U15, U17 National Team Member",
    ],
  };

  return (
    <div id="tt-container">
      <div id="tt-list">
        {Object.entries(award_list).map(([tour, awards]) => {
          return (
            <div className="mb-10">
              <h1 id="tt-title">{tour}</h1>
              <ul>
                {awards.map((award) => {
                  return <li id="tt-award">{award}</li>;
                })}
              </ul>
            </div>
          );
        })}
        <div className="h-20"></div>
      </div>
    </div>
  );
}

export default TableTennis;
