import './Projects.css'
import projectData from '../../data/projecta.json'
import Diary from '../../assets/Diary.jpg'
import AddUser from '../../assets/AddUser.png'
import weather from '../../assets/weather.jpg'
import amazon from '../../assets/amazon.jpg'

export default function Projects() {
  const images={
    Diary,
    AddUser,
    weather,
    amazon
  }
  return (
    <div name="project" className="projects">
      <h1 className="amith">My Projects</h1>
      <div className="boxes">
        {projectData.map((project, index) => (
          <div className="box" key={index}>
            <div className="top">
              <img src={images[project.imgName]} alt={project.imgName} className="hmm" />
              <h2 className="heading">{project.heading}</h2>
            </div>
            <div className="bottom">
              <p className="para">{project.description}</p>
              <a
                href={project.link}
                className="read"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}