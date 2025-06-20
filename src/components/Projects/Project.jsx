import TypeIt from "typeit";
import { projects } from "../Details";
import { useEffect } from "react";
const Project = ({ path }) => {
  useEffect(() => {
    new TypeIt("#display-project", {
      speed: 100,
      waitUntilVisible: true,
      afterComplete: (instance) => {
        instance.element.querySelector(".ti-cursor")?.remove();
        setTimeout(() => {
          document.getElementById("my-projects").classList.remove("none");
          document
            .getElementById("my-projects-mobile")
            .classList.remove("none");
        }, 200);
      },
    })
      .type("show projects <span style='color:gray'>--all</span>", {
        delay: 200,
      })
      .pause(200)
      .go();
  }, []);

  return (
    <div className="content text-xl h-[calc(100vh-40px)] overflow-y-auto">
      <h1 className="text-xl mb-4">
        {path} <span id="display-project"></span>
      </h1>
      <div className="hidden md:block none" id="my-projects">
        <table className="w-auto table-auto border-collapse">
          <thead>
            <tr>
              <th>No.</th>
              <th>Project Name</th>
              <th>Duration</th>
              <th>Technology</th>
              <th>Problem Statement</th>
              <th>Solution</th>
              <th>Approach</th>
              <th>Link</th>
            </tr>
          </thead>
          {projects.map((proj, index) => (
            <tbody key={index}>
              <tr>
                <td>{index + 1}</td>
                <td>{proj.name}</td>
                <td>{proj.duration}</td>
                <td>{proj.technology}</td>
                <td>{proj.problemStatment}</td>
                <td>{proj.solution}</td>
                <td>{proj.approach}</td>
                <td>
                  <a target="_blank" href={proj.githubLink}>
                    Link
                  </a>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className="md:hidden none text-xl" id="my-projects-mobile">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="rounded-lg !p-5 !mt-3 border border-gray-600"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-bold text-white flex justify-center gap-1">
                {proj.name}
                <a target="_blank" href={proj.githubLink}>
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-sharp/24/FFFFFF/link--v1.png"
                    alt="link--v1"
                  />
                </a>
              </h3>
              <h2 className="text-xl font-bold text-green-400">
                {proj.duration}
              </h2>
            </div>

            <div className="space-y-3 flex flex-col gap-5">
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-1 underline">
                  Problem Statement:
                </h4>
                <p className="text-sm text-gray-100">{proj.problemStatment}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-1 underline">
                  Solution:
                </h4>
                <p className="text-sm text-gray-100">{proj.solution}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-1 underline">
                  Approach:
                </h4>
                <p className="text-sm text-gray-100">{proj.approach}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-1 underline">
                  Technology:
                </h4>
                <p className="text-sm text-gray-100">{proj.technology}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
