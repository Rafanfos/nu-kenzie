import "./style.css";

const RemoveButton = ({ setListTransactions, index }) => {
  const removeItem = () => {
    setListTransactions((previouslistTrasactions) =>
      previouslistTrasactions.filter(
        (transaction) => previouslistTrasactions.indexOf(transaction) !== index
      )
    );
  };

  return (
    <button className="remove_button">
      <div onClick={removeItem}></div>
    </button>
  );
};

export default RemoveButton;
