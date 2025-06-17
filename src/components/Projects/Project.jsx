import React, { useEffect } from "react";
import { projects } from "../Details";

const Project = ({ path }) => {
  //   useEffect({}, []);

  return (
    <div className="content">
      <h1 className="text-xl">
        {path} <span id="display-skill"></span>
      </h1>
      <div>
        {projects.map((proj) => (
          <div>
            <h1 className="text-xl">{proj.name}</h1>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
