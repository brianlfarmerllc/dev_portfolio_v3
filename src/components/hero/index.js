function Hero({ navBar, text, hero, invoke }) {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className={hero}>
          <div className="hero-text">
            <h3>Hi, my name is</h3>
            <h1>
              Brian and I create <br />
              tools for people on the web.
            </h1>
            <p>
              I am a Dallas Texas based software engineer who specializes in
              creating exceptional digital experiences. Highly adaptable
              technically, with a focus on the front-end development.
            </p>
            <a href="resume">Resume</a>
          </div>
        </div>
        <div className={navBar}>
          <span className="function">function</span>{" "}
          <span className="constName"> createSite &#40; &#41; </span>{" "}
          <span className="curly">&#123;</span>
          <h4 className="typewriter">{text}</h4>
          <span className="curly">&#125;</span>
          <br />
          <div className="invoke">
            <h4>{invoke}</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
