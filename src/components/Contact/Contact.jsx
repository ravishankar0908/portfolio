import React, { useEffect } from "react";
import TypeIt from "typeit";
import { details } from "../Details";
export const Contact = ({ path }) => {
  useEffect(() => {
    new TypeIt("#display-contact", {
      speed: 100,
      waitUntilVisible: true,
      afterComplete: (instance) => {
        instance.element.querySelector(".ti-cursor")?.remove();
        document.getElementById("contact-details").classList.remove("none");

        setTimeout(() => {
          document.getElementById("social-handles").classList.remove("none");
          document.getElementById("resume").classList.remove("none");
        }, 500);
      },
    })
      .type("show contact <span style='color: gray'>--all</span>", {
        delay: 200,
      })
      .pause(200)
      .exec(async () => {
        new TypeIt("#display-resume", {
          speed: 100,
          waitUntilVisible: true,
          afterComplete: (instance) => {
            instance.element.querySelector(".ti-cursor")?.remove();
            document.getElementById("download-resume").classList.remove("none");
            const exit = document.getElementById("exit");
            exit.classList.remove("none");
          },
        })
          .type("download resume<span style='color: gray'>@latest</span>", {
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
          .pause(200)
          .go();
      })
      .go();
  }, []);

  return (
    <div className="content text-xl">
      <h1 className="">
        {path}
        <span id="display-contact"></span>
      </h1>

      <div className="flex flex-col gap-3 none" id="contact-details">
        <div>
          <span className="text-bold">Email: </span>
          <span className="underline">
            <a href="mailto:ravishankarviswanathan7@gmail.com">
              {details.email}
            </a>
          </span>
        </div>
        <div>
          <span className="text-bold">Phone Number: </span>
          <span>{details.phone}</span>
        </div>
        <div>
          <span className="text-bold">Location: </span>
          <span>{details.location}</span>
        </div>
      </div>

      <div className="social-media none flex gap-5" id="social-handles">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ravi-shankar-m-v-7184b0224/"
        >
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png"
            alt="linkedin"
          />
        </a>

        <a target="_blank" href="https://github.com/ravishankar0908">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/glyph-neue/100/FFFFFF/github.png"
            alt="github"
          />
        </a>

        <a target="_blank" href="https://www.instagram.com/ravi.___.shankar/">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/FFFFFF/instagram-new--v1.png"
            alt="instagram-new--v1"
          />
        </a>
      </div>

      <h1 className="none" id="resume">
        {path} <span id="display-resume"></span>
      </h1>

      <div className="resume none" id="download-resume">
        <a target="_blank" className="underline" href="Ravi_Shankar_Resume.pdf">
          click Here to download resume...
        </a>
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
