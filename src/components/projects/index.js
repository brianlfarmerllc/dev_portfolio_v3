import { useState, useEffect } from "react";
import api from "../api";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    loadProjects();
    api.getTopics("brianlfarmerllc", "BFFK-9_Session_Tracker");
  }, []);

  const loadProjects = () => {
    api.getProjects().then((res) => {
      const starProjects = res.filter(
        (project) => project.stargazers_count > 0
      );
      setProjects(starProjects);
    });
  };
  return <section></section>;
}

export default Projects;
