import brian from "../../assets/brian_base.jpeg";
function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <header className="about-header">
          <h2>About Me</h2>
        </header>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! My name is Brian and I enjoy creating things that live on
              the internet. My interest in web development started back in 2018
              while creating a website for my wifes business using the hosted
              website builder "Wix".
            </p>
            <p>
              I am a naturaly curious person and a habitual hobbiest so I set
              myself on a mision to discover what was really going on behind the
              scenes. I found a world way beyond the drag and drop website
              builder and discovered a career path I could be excited about.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SASS</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="about-img">
            <img src={brian} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
