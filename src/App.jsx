import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";

const App = () => {
  const [entered, setEntered] = useState(false);
  //

  return (
    <div className="App">
      {!entered ? (
        <LandingPage setEntered={setEntered}></LandingPage>
      ) : (
        <HomePage setEntered={setEntered}></HomePage>
      )}
    </div>
  );
};

export default App;
