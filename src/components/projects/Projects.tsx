import "./Projects.css";

interface Props {
  setHover: any;
}

function Projects({ setHover }: Props) {
  const projects = [
    [
      "Neural Network from Scratch",
      "Machine Learning",
      "https://www.kaggle.com/code/stabweee/neural-network-from-scratch",
    ],
    [
      "Stocks Classifier",
      "Machine Learning, Data Science",
      "https://www.kaggle.com/code/stabweee/stock-price-classifier",
    ],
    [
      "Wallops Project",
      "Web Development",
      "https://wallops-project.vercel.app/",
    ],
  ];

  return (
    <div id="projects-container">
      <ul id="projects-list" className="overflow-scroll">
        {projects.map((project) => {
          return (
            <div
              id="project"
              onClick={() => window.open(project[2])}
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
            >
              <li id="project-name" className="text-5xl w-fit">
                {project[0]}
              </li>
              <h1 id="project-description" className="text-sm">
                {project[1]}
              </h1>
            </div>
          );
        })}
        <div className="h-14"></div>
      </ul>
      <div id="thanks-container">
        <h1 className="w-5/6 text-center text-sm font-thin">
          A token of appreciation to my mentor Gregory Mascialino for his
          guidance through these projects.
        </h1>
      </div>
    </div>
  );
}

export default Projects;
