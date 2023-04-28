import { useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";

function Header() {
  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return (
    <>
      <Link
        to="/"
        onClick={() => {
          let hero = document.getElementById("hero");
          hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
        Hero
      </Link>
      <Link
        to="/about"
        onClick={() => {
          let about = document.getElementById("about");
          about && about.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
        About
      </Link>
      <Link
        to="/contact"
        onClick={() => {
          let contact = document.getElementById("contact");
          contact &&
            contact.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
        Contact
      </Link>
    </>
  );
}

function Hero() {
  return (
    <section id="hero">
      <h1>Hero Section</h1>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <h1>About Section</h1>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <h1>Contact Section</h1>
    </section>
  );
}

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Hero />
        <About />
        <Contact />
      </BrowserRouter>
    </div>
  );
}
