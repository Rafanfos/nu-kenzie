import { useEffect, useState } from "react";
import List from "../List";
import "./style.css";

const Filters = ({ listTransactions, setListTransactions }) => {
  const [filterTransactions, setFilterTransactions] =
    useState(listTransactions);

  const total = () => {
    setFilterTransactions(listTransactions);
  };

  const incomes = () => {
    setFilterTransactions(
      listTransactions.filter(({ type }) => type === "Entrada")
    );
  };

  const costs = () => {
    setFilterTransactions(
      listTransactions.filter(({ type }) => type === "Saída")
    );
  };

  useEffect(() => {
    setFilterTransactions(listTransactions);
  }, [listTransactions]);

  return (
    <div className="filters_list">
      <div className="filters">
        <h2 className="grey3">Resumo financeiro</h2>
        <button className="filter" onClick={total}>
          Todos
        </button>
        <button className="filter" onClick={incomes}>
          Ganhos
        </button>
        <button className="filter" onClick={costs}>
          Despesas
        </button>
      </div>
      <div className="list">
        {filterTransactions.length > 0 ? (
          <List
            listTransactions={listTransactions}
            filterTransactions={filterTransactions}
            setFilterTransactions={setFilterTransactions}
            setListTransactions={setListTransactions}
          ></List>
        ) : (
          <div className="no-card">
            <h2 className="grey3">Você não possui lançamentos</h2>
            <img
              id="no-card"
              className="no-card"
              alt="NoCard"
              src="./assets/NoCard.svg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
