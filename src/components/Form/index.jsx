import "./style.css";

const Form = ({ listTransactions, setListTransactions }) => {
  return (
    <form>
      <label className="grey4" for="description">
        Descrição
      </label>
      <input
        className="grey1"
        placeholder="Digite aqui sua descrição"
        id="description"
      ></input>
      <span className="grey50 small">Ex: compra de roupas</span>
      <div className="values">
        <div className="value">
          <label className="grey4" for="value">
            Valor
          </label>
          <div>
            <input className="grey1" placeholder="1" id="value"></input>
            <span className="grey3">R$</span>
          </div>
        </div>
        <div className="type">
          <label className="grey4" for="type">
            Tipo de valor
          </label>
          <select id="type" className="grey1 grey3">
            <option className="grey3">Entrada</option>
            <option className="grey3">Saída</option>
          </select>
        </div>
      </div>
      <button className="primary white">Inserir Valor</button>
    </form>
  );
};

export default Form;
