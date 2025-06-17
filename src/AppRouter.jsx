import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Contact } from "./components/Contact/Contact";
import { SkillSet } from "./components/SkillSet/SkillSet";
import Project from "./components/Projects/Project";

export const AppRouter = ({ path }) => {
  const homePath = "C:\\Users\\RaviShankar\\portfolio\\home>";
  const contactPath = "C:\\Users\\RaviShankar\\portfolio\\contact>";
  const skillsetPath = "C:\\Users\\RaviShankar\\portfolio\\skillset>";
  const projectsPath = "C:\\Users\\RaviShankar\\portfolio\\projects>";

  return (
    <div className="w-full">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home path={homePath} />} />
        <Route path="/contact" element={<Contact path={contactPath} />} />
        <Route path="/skillset" element={<SkillSet path={skillsetPath} />} />
        <Route path="/projects" element={<Project path={projectsPath} />} />
      </Routes>
    </div>
  );
};
