import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";

const App = () => {
  const [entered, setEntered] = useState(false);
  // const [listTransactions, setListTransactions] = useState([]);

  return (
    <div className="App">
      {!entered ? (
        <HomePage setEntered={setEntered}></HomePage>
      ) : (
        console.log("Indo para dashboard")
      )}
    </div>
  );
};

export default App;
