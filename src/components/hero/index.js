function Hero({ navBar, text }) {
  return (
    <section className="hero">
      <div className="text-container">
        <div className={navBar}>
          <span className="const">const</span>{" "}
          <span className="constName"> navBar</span>{" "}
          <span className="equals">=</span> <span className="array">[</span>
          <h4>{text}</h4>
          <span className="array">]</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
