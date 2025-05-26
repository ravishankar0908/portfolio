import "./Header.css";
import {
  X,
  Minus,
  Square,
  TerminalWindow,
  Plus,
  CaretDown,
} from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
function Header() {
  const location = useLocation();
  const [activeTab, setactiveTab] = useState("Home");

  const tabs = [
    { name: "Home", path: "/" },
    { name: "Skills set", path: "/skillset" },
    { name: "Contact me", path: "/contact" },
  ];

  useEffect(() => {
    const currentTab = tabs.find((tab) => tab.path === location.pathname);
    setactiveTab(currentTab ? currentTab.name : "");
  }, [location.pathname]);

  return (
    <header className="flex">
      <div className="bg-neutral-700 text-white w-[100%] h-12 flex justify-between items-end">
        <div className="flex">
          {tabs.map((tab) => (
            <Link to={tab.path} key={tab.name}>
              <div
                onClick={() => setactiveTab(tab.name)}
                className={`flex flex-wrap items-center justify-between margin rounded-t-lg h-9 w-[170px]  ${
                  activeTab === tab.name ? "bg-black" : "hover:bg-neutral-800"
                }`}
              >
                <span className="flex items-center gap-2">
                  <TerminalWindow size={16} />
                  {tab.name}
                </span>
                <span
                  className={`flex items-center ${
                    activeTab === tab.name
                      ? "hover:bg-zinc-900"
                      : "hover:bg-zinc-700"
                  }  w-10 rounded h-7 items-center justify-center`}
                >
                  <X size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center float-right">
          <span className="hover:bg-neutral-600 flex w-15 h-12 justify-center items-center">
            <Minus size={16} />
          </span>
          <span className="hover:bg-neutral-600 w-15 h-12 flex justify-center items-center">
            <Square size={16} />
          </span>
          <span className="hover:bg-red-600 w-15 h-12 flex justify-center items-center">
            <X size={16} />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
