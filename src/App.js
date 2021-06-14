import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Hero from "./components/hero";

function App() {
  const [header, setHeader] = useState("hide");
  const [navBar, setNavBar] = useState("navBar");
  const [hero, setHero] = useState("hero-content gone");
  const phrase = `"About", "Portfolio", "Contact"`;
  const [text, setText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (header === "show") {
        setTimeout(() => {
          setNavBar("navBar gone");
          setHero("hero-content hero-show");
        }, 2500);
      } else if (text === phrase) {
        setHeader("show");
        setNavBar("navBar fadeout");
        return;
      } else {
        let newText = phrase.substring(0, text.length + 1);
        setText(newText);
      }
    }, 120);
    return () => clearInterval(interval);
  });
  return (
    <main>
      <Header header={header} />
      <Hero navBar={navBar} text={text} hero={hero} />
    </main>
  );
}

export default App;
