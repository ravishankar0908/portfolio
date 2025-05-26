import "./App.css";
import { AppRouter } from "./appRouter";
import Header from "./components/Header/Header";

import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen">
        <Header />

        <AppRouter path={"C:\\Users\\RaviShankar\\portfolio>"} />
      </div>
    </BrowserRouter>
  );
}

export default App;
