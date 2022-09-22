import "./style.css";

const Total = ({ listTransactions }) => {
  const totalValue = listTransactions.reduce(
    (acc, { value }) => acc + value,
    0
  );

  return (
    <div className="total_value">
      <div className="text">
        <span id="total_value-text" className="grey4">
          Valor total:
        </span>
        <span className="small grey3">O valor se refere ao saldo</span>
      </div>
      <span id="total_value">
        {totalValue >= 0
          ? `R$ ${Math.abs(totalValue).toFixed(2).replace(".", ",")}`
          : `- R$ ${Math.abs(totalValue).toFixed(2).replace(".", ",")}`}
      </span>
    </div>
  );
};

export default Total;
