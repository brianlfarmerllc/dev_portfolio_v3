function Hero({ navBar, text, hero }) {
  return (
    <section className="hero">
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
          <span className="const">const</span>{" "}
          <span className="constName"> navBar</span>{" "}
          <span className="equals">=</span> <span className="array">[</span>
          <h4 className="typewriter">{text}</h4>
          <span className="array">]</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
