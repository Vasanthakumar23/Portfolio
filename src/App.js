import "./App.css";
import Header from "./containers/header";
import Greetings from "./containers/greeting";
import Skills from "./containers/skills";
import About from "./containers/about";
import Education from "./containers/education";
import Contact from "./containers/contacts";
import Project from "./containers/projects";
import Achievements from "./containers/achievements";
import Footer from "./containers/footer";
function App() {
  return (
    <>
      <Header />
      <Greetings />
      <About />
      <Education />
      <Skills />
      <Achievements />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
