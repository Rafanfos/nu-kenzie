import "./style.css";

const HomePage = ({ setEntered }) => {
  return (
    <div className="landing-page">
      <header className="grey1">
        <nav>
          <img className="logo" src="./assets/Nu Kenzie_black.png" alt="logo" />
          <button className="grey3" onClick={() => setEntered(false)}>
            Início
          </button>
        </nav>
      </header>
      <main></main>
    </div>
  );
};

export default HomePage;
