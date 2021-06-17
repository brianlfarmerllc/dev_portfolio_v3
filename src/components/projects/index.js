import { useState, useEffect } from "react";
import api from "../api";
import ProjectCard from "../projectCard";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = () => {
    api.getProjects().then((res) => {
      const starProjects = res.filter(
        (project) => project.stargazers_count > 0
      );
      setProjects(starProjects);
    });
  };
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <header className="projects-header">
          <h2>Other Noteworthy Projects</h2>
        </header>
        <div className="projects-content">
          {projects.map((project, index) => (
            <ProjectCard key={index} info={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
