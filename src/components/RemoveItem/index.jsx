import "./style.css";

const RemoveButton = ({ setListTransactions, index }) => {
  const removeItem = () => {
    setListTransactions((previouslistTransactions) =>
      previouslistTransactions.filter(
        (transaction) => previouslistTransactions.indexOf(transaction) !== index
      )
    );
  };

  // const total = () => {
  //   setFilterTransactions(listTransactions);
  // };

  return (
    <button className="remove_button">
      <div onClick={removeItem}></div>
    </button>
  );
};

export default RemoveButton;
