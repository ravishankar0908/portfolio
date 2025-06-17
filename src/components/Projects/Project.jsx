import { projects } from "../Details";

const Project = ({ path }) => {
  return (
    <div className="content text-xl h-auto">
      <h1 className="text-xl mb-4">
        {path} <span id="display-skill"></span>
      </h1>

      {/* Desktop Table */}
      <div className="hidden md:block">
        <table className="border-collapse border border-gray-100">
          <thead>
            <tr>
              <th>No.</th>
              <th>Project Name</th>
              <th>Problem Statement</th>
              <th>Solution</th>
              <th>Approach</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((proj, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{proj.name}</td>
                <td>{proj.problemStatment}</td>
                <td>{proj.solution}</td>
                <td>{proj.approach}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="md:hidden ">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="rounded-lg !p-5 !mt-3 border border-gray-600"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-bold text-white">{proj.name}</h3>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
