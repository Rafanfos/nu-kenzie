import Form from "../Form";
import { useState } from "react";
import "./style.css";

const HomePage = ({ setEntered }) => {
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <div className="landing-page">
      <header className="grey1">
        <nav>
          <img className="logo" src="./assets/Nu Kenzie_black.png" alt="logo" />
          <button className="grey3" onClick={() => setEntered(false)}>
            Início
          </button>
        </nav>
      </header>
      <main>
        <div className="form_total">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          ></Form>
        </div>
        <div></div>
      </main>
    </div>
  );
};

export default HomePage;
