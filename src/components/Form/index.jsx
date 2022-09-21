import { useState } from "react";
import "./style.css";

const Form = ({ listTransactions, setListTransactions }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");

  const handleTrasactions = (event) => {
    event.preventDefault();
    setListTransactions({ description: description, value: value, type: type });
  };

  return (
    <form onSubmit={handleTrasactions}>
      <label className="grey4" for="description">
        Descrição
      </label>
      <input
        className="grey1"
        placeholder="Digite aqui sua descrição"
        id="description"
        onChange={(event) => setDescription(event.target.value)}
      ></input>
      <span className="grey50 small">Ex: compra de roupas</span>
      <div className="values">
        <div className="value">
          <label className="grey4" for="value">
            Valor
          </label>
          <div>
            <input
              className="grey1"
              placeholder="1"
              id="value"
              onChange={(event) => setValue(event.target.value)}
            ></input>
            <span className="grey3">R$</span>
          </div>
        </div>
        <div className="type">
          <label className="grey4" for="type">
            Tipo de valor
          </label>
          <select
            id="type"
            className="grey1 grey3"
            onChange={(event) => setType(event.target.value)}
          >
            <option></option>
            <option className="grey3">Entrada</option>
            <option className="grey3">Saída</option>
          </select>
        </div>
      </div>
      <button type="submit" className="primary white">
        Inserir Valor
      </button>
    </form>
  );
};

export default Form;
