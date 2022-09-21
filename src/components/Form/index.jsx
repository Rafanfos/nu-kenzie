import { useState } from "react";
import "./style.css";

const Form = ({ listTransactions, setListTransactions }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");

  const handleTrasactions = (event) => {
    event.preventDefault();
    setListTransactions([
      ...listTransactions,
      {
        description: description,
        value: `R$ ${(+value).toFixed(2).replace(".", ",")}`,
        type: type,
      },
    ]);
    console.log(listTransactions);
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
        required
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
              required
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
            required
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
