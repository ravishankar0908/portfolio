import "./App.css";
import { AppRouter } from "./appRouter";
import Header from "./components/Header/Header";

import { HashRouter } from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <div className="bg-black">
        <Header />
        <AppRouter />
      </div>
    </HashRouter>
  );
}

export default App;
