import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Work from "./components/work";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  const [header, setHeader] = useState("hide");
  const [navBar, setNavBar] = useState("navBar");
  const [hero, setHero] = useState("hero-content gone");
  const phrase = `this.makeCoolSite`;
  const phrase2 = `createSite( )`;
  const [text, setText] = useState("");
  const [invoke, setInvoke] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (header === "show") {
        setTimeout(() => {
          setNavBar("navBar gone");
          setHero("hero-content hero-show");
        }, 2500);
      } else if (invoke === phrase2) {
        setHeader("show");
        setNavBar("navBar fadeout");
        return;
      } else if (text === phrase) {
        let newText2 = phrase2.substring(0, invoke.length + 1);
        setInvoke(newText2);
        return;
      } else {
        let newText = phrase.substring(0, text.length + 1);
        setText(newText);
      }
    }, 130);
    return () => clearInterval(interval);
  });

  return (
    <main>
      <Header header={header} />
      <Hero navBar={navBar} text={text} hero={hero} invoke={invoke} />
      <About />
      <Work />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
