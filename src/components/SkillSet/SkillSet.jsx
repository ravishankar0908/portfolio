import React, { useEffect } from "react";
import TypeIt from "typeit";
import { details } from "../Details";

export const SkillSet = ({ path }) => {
  useEffect(() => {
    new TypeIt("#display-skill", {
      speed: 100,
      waitUntilVisible: true,
      afterComplete: (instance) => {
        instance.element.querySelector(".ti-cursor")?.remove();
        document.getElementById("my-skills").classList.remove("none");
        setTimeout(() => {
          document.getElementById("logo").classList.remove("none");
          document.getElementById("experience").classList.remove("none");
        }, 500);
      },
    })
      .type("show skills <span style='color: gray'>--table --logo</span>", {
        delay: 200,
      })
      .pause(200)
      .exec(() => {
        new TypeIt("#display-exp", {
          speed: 100,
          waitUntilVisible: true,
          afterComplete: (instance) => {
            instance.element.querySelector(".ti-cursor")?.remove();
            document.getElementById("exp").classList.remove("none");
            const exit = document.getElementById("exit");
            exit.classList.remove("none");
          },
        })
          .type("show experience <span style='color: gray'>--list</span>", {
            delay: 200,
          })
          .pause(200)
          .exec(() => {
            new TypeIt("#ctrl-c", {
              speed: 100,
              waitUntilVisible: true,
              afterComplete: (instance) => {
                instance.element.querySelector(".ti-cursor")?.remove();
                const displayMessage =
                  document.getElementById("display-message");
                displayMessage.classList.remove("none");
              },
            })
              .type("^c", { delay: 200 })
              .pause(500)
              .go();
          })
          .go();
      })
      .go();
  }, []);
  return (
    <div className="content">
      <h1 className="text-xl">
        {path} <span id="display-skill"></span>
      </h1>
      <div className="none text-xl" id="my-skills">
        <h1>My skills are: </h1>
        <div className="overflow-x-auto">
          <table className="border-collapse border border-gray-100 w-50">
            <tbody>
              <tr>
                <th>Languages</th>
                <td>Java</td>
                <td>C</td>
                <td>Python</td>
                <td>JavaScript</td>
                <td>HTML/CSS</td>
                <td>PHP</td>
                <td>SQL</td>
                <td>MongoDB</td>
              </tr>
              <tr>
                <th>Frameworks/Technologies</th>
                <td>Angular</td>
                <td>Node.js</td>
                <td>Express.js</td>
                <td>React</td>
                <td>Bootstrap</td>
                <td>TailWind</td>
                <td>MEAN</td>
                <td>MERN</td>
              </tr>
              <tr>
                <th>Tools / Software</th>
                <td>Git</td>
                <td>GitHub</td>
                <td>VS Code</td>
                <td>Eclipse</td>
                <td colSpan={2}>Xampp</td>
                <td colSpan={2}>Postman</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 logos none" id="logo">
        <div className="text-center">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/ios/100/FFFFFF/angularjs.png"
            alt="angularjs"
          />
          <span>Angular</span>
        </div>
        <div className="text-center">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/100/FFFFFF/external-mongodb-a-cross-platform-document-oriented-database-program-logo-regular-tal-revivo.png"
            alt="external-mongodb-a-cross-platform-document-oriented-database-program-logo-regular-tal-revivo"
          />
          <span>MongoDB</span>
        </div>

        <div className="text-center">
          {" "}
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/ios/100/FFFFFF/express-js.png"
            alt="express-js"
          />
          <span>Express.js</span>
        </div>
        <div className="text-center">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/windows/100/FFFFFF/node-js.png"
            alt="node-js"
          />
          <span>Node.js</span>
        </div>
        <div className="text-center">
          {" "}
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/ios-glyphs/100/FFFFFF/react.png"
            alt="react"
          />
          <span>React</span>
        </div>
        <div className="text-center">
          {" "}
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/external-those-icons-fill-those-icons/100/FFFFFF/external-MySQL-programming-and-development-those-icons-fill-those-icons.png"
            alt="external-MySQL-programming-and-development-those-icons-fill-those-icons"
          />
          <span>MySQl</span>
        </div>
        <div className="text-center">
          {" "}
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/ios/100/FFFFFF/java-coffee-cup-logo--v1.png"
            alt="java-coffee-cup-logo--v1"
          />
          <span>Java</span>
        </div>
        <div className="text-center">
          {" "}
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/glyph-neue/100/FFFFFF/github.png"
            alt="github"
          />
          <span>Github</span>
        </div>
        <div className="text-center">
          {" "}
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/100/FFFFFF/external-postman-is-the-only-complete-api-development-environment-logo-bold-tal-revivo.png"
            alt="external-postman-is-the-only-complete-api-development-environment-logo-bold-tal-revivo"
          />
          <span>Postman</span>
        </div>
        <div className="text-center">
          {" "}
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/ios/100/FFFFFF/bootstrap.png"
            alt="bootstrap"
          />
          <span>Bootstrap</span>
        </div>
      </div>

      <h1 className="none text-xl" id="experience">
        {path}
        <span id="display-exp"></span>
      </h1>

      <div className="exp text-xl none" id="exp">
        <h2>{details.role}</h2>
        <h2>{details.dateAndLocation}</h2>
        <ul className="lists">
          {details.description.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}

          {/* <li>{details.point1}</li>
          <li>{details.point2}</li>
          <li>{details.point3}</li> */}
        </ul>
      </div>

      <h1 className="text-xl none" id="exit">
        {" "}
        {path} <span id="ctrl-c"></span>
      </h1>
      <div className="none" id="display-message">
        <h1 className="text-xl">Terminate {"(Y/N)?"} Y</h1>

        <h1 className="text-xl "> {path} Thank you, see you again!</h1>

        <h1 className="text-xl ">
          {path}
          <span className="cursor-blink">&nbsp;</span>
        </h1>
      </div>
    </div>
  );
};
