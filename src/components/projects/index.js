import { useState, useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import api from "../api";
import ProjectCard from "../projectCard";

function Projects() {
  const [projects, setProjects] = useState([]);
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

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
    <section ref={sectionRef} id="projects" className="projects">
      <div className="projects-container">
        <header className="projects-header">
          <h2>Other Noteworthy Projects</h2>
        </header>
        <div
          className={
            intersection && intersection.intersectionRatio < 0.1
              ? "projects-content"
              : "projects-content show-element"
          }
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} info={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
