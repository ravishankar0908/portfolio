import "./App.css";
import { AppRouter } from "./AppRouter";
import Header from "./components/Header/Header";

import { BrowserRouter, HashRouter } from "react-router-dom";
function App() {
  return (
    // <BrowserRouter>
    <HashRouter>
      <div className="bg-black min-h-screen">
        <Header />

        <AppRouter path={"C:\\Users\\RaviShankar\\portfolio>"} />
      </div>
    </HashRouter>
    // </BrowserRouter>
  );
}

export default App;
