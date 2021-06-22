import { useRef } from "react";
import { useIntersection } from "react-use";
import fem from "../../assets/fem.png";
import readme from "../../assets/readme.png";
import bffk9 from "../../assets/bffk9.png";
function Work() {
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });
  return (
    <section ref={sectionRef} id="work" className="work">
      <div className="work-container">
        <header className="work-header">
          <h2>What I've Been Working On</h2>
        </header>
        <div
          className={
            intersection && intersection.intersectionRatio < 0.1
              ? "work-content"
              : "work-content show-element"
          }
        >
          {/* first featured */}
          <div className="featured">
            <div className=" featured-img featured-img-left">
              {/* link to first featured site */}
              <a
                href="https://www.frontendmentor.io/profile/brianlfarmerllc"
                target="blank"
              >
                {/* screen shot first featured */}
                <img src={fem} alt="screenshot-frontend-mentor" />
              </a>
            </div>
            <div className="featured-content featured-content-right">
              <header className="content-header">
                <p>Featured Project</p>
                {/* First featured name */}
                <h3>Frontend Mentor</h3>
              </header>
              <div className="project-description">
                {/* first featured description */}
                <p>
                A fun resource for developers to challenge themselves while
                  learning new skills by creating front end projects off a
                  provided design.
                </p>
              </div>
              {/* first featured tech */}
              <ul className="project-tech">
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>SASS</li>
              </ul>
              <ul className="project-links">
                <li>
                  {/* first featured  site link*/}
                  <a
                    href="https://www.frontendmentor.io/profile/brianlfarmerllc"
                    target="blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1c1c22"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-external-link"
                    >
                      <title>External Link</title>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* second featured */}
          <div className="featured">
            <div className=" featured-img featured-img-right">
              {/* link to second featured site */}
              <a href="https://readme-creator.herokuapp.com/" target="blank">
                {/* screen shot second featured */}
                <img src={readme} alt="screenshot-readme-generator" />
              </a>
            </div>
            <div className="featured-content featured-content-left">
              <header className="content-header">
                <p>Featured Project</p>
                {/* second featured name */}
                <h3>Read Me Generator</h3>
              </header>
              <div className="project-description">
                {/* second featured description */}
                <p>
                  This is a project built with React that allows users to create
                  and download consistent documentation for their apps.
                </p>
              </div>
              {/* first featured tech */}
              <ul className="project-tech">
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
                <li>DownloadJS</li>
              </ul>
              <ul className="project-links">
                <li>
                  {/* second featured  git link*/}
                  <a
                    href="https://github.com/brianlfarmerllc/React-App-README.md-File-Generator"
                    target="blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1c1c22"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-github"
                    >
                      <title>GitHub</title>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  {/* second featured  site link*/}
                  <a
                    href="https://readme-creator.herokuapp.com/"
                    target="blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1c1c22"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-external-link"
                    >
                      <title>External Link</title>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* third featured */}
          <div className="featured">
            <div className=" featured-img featured-img-left">
              {/* link to third featured site */}
              <a
                href="https://bffk9-session-tracker.herokuapp.com/"
                target="blank"
              >
                {/* screen shot third featured */}
                <img src={bffk9} alt="screenshot-frontend-mentor" />
              </a>
            </div>
            <div className="featured-content featured-content-right">
              <header className="content-header">
                <p>Featured Project</p>
                {/* third featured name */}
                <h3>BFF K-9 Session Tracker</h3>
              </header>
              <div className="project-description">
                {/* third featured description */}
                <p>
                  This is a copy of a project I built with the MERN stack for my
                  wife to track client info and training schedules for her
                  business.
                </p>
              </div>
              {/* third featured tech */}
              <ul className="project-tech">
                <li>MERN</li>
                <li>Moment</li>
                <li>Async</li>
                <li>Time-Picker</li>
              </ul>
              <ul className="project-links">
                <li>
                  {/* third featured  git link*/}
                  <a
                    href="https://github.com/brianlfarmerllc/BFFK-9_Session_Tracker"
                    target="blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1c1c22"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-github"
                    >
                      <title>GitHub</title>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  {/* third featured  site link*/}
                  <a
                    href="https://bffk9-session-tracker.herokuapp.com/"
                    target="blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1c1c22"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-external-link"
                    >
                      <title>External Link</title>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
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
