import RemoveButton from "../RemoveItem";
import "./style.css";

const List = ({ setListTransactions, filterTransactions }) => {
  return (
    <ul>
      {filterTransactions.map(({ description, value, type }, index) => {
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
              <RemoveButton
                setListTransactions={setListTransactions}
                index={index}
              ></RemoveButton>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
