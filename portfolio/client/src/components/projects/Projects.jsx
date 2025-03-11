import './Projects.css'
import projectData from '../../data/projecta.json'

export default function Projects() {
  return (
    <div name="project" className="projects">
      <h1 className="amith">My Projects</h1>
      <div className="boxes">
        {projectData.map((project, index) => (
          <div className="box" key={index}>
            <div className="top">
              <img src={`/${project.imgName}`} alt={project.imgName} className="hmm" />
              <h2 className="heading">{project.heading}</h2>
            </div>
            <div className="bottom">
              <p className="para">{project.description}</p>
              <a href={project.link} className="read" target="_blank">View Project &rarr;</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}