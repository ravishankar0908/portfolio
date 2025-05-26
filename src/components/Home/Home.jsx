import { useEffect } from "react";
import TypeIt from "typeit";
import { details } from "../Details";
export const Home = ({ path }) => {
  useEffect(() => {
    new TypeIt("#show-name", {
      speed: 100,
      waitUntilVisible: true,
      afterComplete: (instance) => {
        instance.element.querySelector(".ti-cursor")?.remove();
        const displayName = document.getElementById("display-name");
        displayName.classList.remove("none");

        const summary = document.getElementById("summary");
        summary.classList.remove("none");
      },
    })
      .type("Show name", { delay: 200 })
      .pause(500)
      .exec(async () => {
        new TypeIt("#show-summary", {
          speed: 100,
          waitUntilVisible: true,
          afterComplete: (instance) => {
            instance.element.querySelector(".ti-cursor")?.remove();
            const displaySummary = document.getElementById("display-summary");
            displaySummary.classList.remove("none");

            const abt = document.getElementById("abt");
            abt.classList.remove("none");
          },
        })
          .type("Show summary", { delay: 200 })
          .pause(500)
          .exec(() => {
            new TypeIt("#about", {
              speed: 100,
              waitUntilVisible: true,
              afterComplete: (instance) => {
                instance.element.querySelector(".ti-cursor")?.remove();
                const displayAbout = document.getElementById("display-about");
                displayAbout.classList.remove("none");

                const exit = document.getElementById("exit");
                exit.classList.remove("none");
              },
            })
              .type(`about ravi <span style='color: gray'>--brief</span>`)
              .pause(500)
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
      })
      .go();
  }, []);

  return (
    <div className="content">
      <h1 className="text-xl">
        {" "}
        {path} <span id="show-name"></span>{" "}
      </h1>
      <h1 className="text-xl space-y-4 none" id="display-name">
        {" "}
        {path} {details.name}
      </h1>

      <h1 className="text-xl none" id="summary">
        {" "}
        {path} <span id="show-summary"></span>{" "}
      </h1>
      <h1 className="text-xl none" id="display-summary">
        {path} {details.summary}
      </h1>

      <h1 className="text-xl none" id="abt">
        {" "}
        {path} <span id="about"></span>
      </h1>

      <h1 className="text-xl none" id="display-about">
        {" "}
        {path} {details.about}
      </h1>

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
