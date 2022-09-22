import "./style.css";

const List = ({ listTransactions }) => {
  return (
    <ul>
      {listTransactions.map(({ description, value, type }, index) => {
        return (
          <li key={index} className="grey1">
            <div>
              <div
                id="retangle"
                className={type === "Entrada" ? "secondary" : "grey2"}
              ></div>
              <div className="description_type">
                <p className="grey4 card-p">{description}</p>
                <span className="grey3 card-span">{type}</span>
              </div>
            </div>
            <div className="value_trash">
              <span className="grey4 card-span">{`R$ ${Math.abs(value)
                .toFixed(2)
                .replace(".", ",")}`}</span>
              <button>
                <div></div>
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
