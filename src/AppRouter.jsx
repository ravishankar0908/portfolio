import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Contact } from "./components/Contact/Contact";
import { SkillSet } from "./components/SkillSet/SkillSet";

export const AppRouter = ({ path }) => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home path={path} />} />
        <Route path="/contact" element={<Contact path={path} />} />
        <Route path="/skillset" element={<SkillSet path={path} />} />
      </Routes>
    </div>
  );
};
