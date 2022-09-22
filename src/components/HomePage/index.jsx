import { useState } from "react";
import "./style.css";
import Form from "../Form";
import List from "../List";
import Total from "../Total";

const HomePage = ({ setEntered }) => {
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <div className="home-page">
      <header className="grey1">
        <nav>
          <img className="logo" src="./assets/Nu Kenzie_black.png" alt="logo" />
          <button className="grey3" onClick={() => setEntered(false)}>
            Início
          </button>
        </nav>
      </header>
      <main className="main_home">
        <div className="form_total">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          ></Form>
          <Total listTransactions={listTransactions}></Total>
        </div>
        <div className="list">
          <List
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          ></List>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
