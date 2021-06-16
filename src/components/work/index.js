import fem from "../../assets/fem.png";
import git from "../../assets/git.svg";
import site from "../../assets/link.svg";
function Work() {
  return (
    <section id="work" className="work">
      <div className="work-container">
        <header className="work-header">
          <h2>What I've Been Working On</h2>
        </header>
        <div className="work-content">
          <div className="featured">
            <div className="featured-img-left">
              <a
                href="https://www.frontendmentor.io/profile/brianlfarmerllc"
                target="blank"
              >
                <img src={fem} alt="screenshot-frontend-mentor" />
              </a>
            </div>
            <div className="featured-content-right">
              <header className="content-header">
                <p>Featured Project</p>
                <h3>Frontend Mentior</h3>
              </header>
              <div className="project-description">
                <p>
                  A fun resource for developers to chalange themselves while
                  learning new skills by creating front end projects off a
                  provided design.
                </p>
              </div>
              <ul className="project-tech">
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>SASS</li>
              </ul>
              <ul className="project-links">
                <li>
                  <a href="#git">
                    <img src={git} alt="git-link" />
                  </a>
                </li>
                <li>
                  <a href="#git">
                    <img src={site} alt="git-link" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
