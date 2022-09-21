import "./style.css";

const LandingPage = ({ setEntered }) => {
  return (
    <main>
      <div className="menu">
        <div className="presentation_text">
          <img className="logo" src="./assets/Nu Kenzie_white.png" alt="logo" />
          <h1>Centralize o controle das suas finanças</h1>
          <span>de forma rápida e segura</span>
        </div>
        <figure>
          <img
            className="presentation_img"
            src="./assets/images_nu_kenzie.svg"
            alt="presentation"
          />
        </figure>
      </div>
      <button
        className="primary white"
        id="start"
        onClick={() => setEntered(true)}
      >
        Iniciar
      </button>
    </main>
  );
};

export default LandingPage;
