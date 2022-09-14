import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { BsCardChecklist, BsFillMoonStarsFill, BsFillPersonFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Helmet from "react-helmet";
import "./App.css";
import Nav from "react-bootstrap/Nav";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Florestarefa 🌲</title>
      </Helmet>
      <header className="text-center mt-3">
        <h1 className="fw-bolder">
          flores<span className="forest-green">tarefa </span>
          <FontAwesomeIcon icon={solid("tree")} />
        </h1>
      </header>
      <Nav
        id="main_nav"
        class="navbar fixed-bottom navbar-light bg-light fa-lg row
    justify-self-center"
      >
        <label class="theme-switch col-1 flex-column" for="checkbox">
          <div>
            <input type="checkbox" id="checkbox" class="btn" title="dark mode" />
            <BsFillMoonStarsFill />
          </div>
        </label>
        <button
          class="btn flex-column col-1 text-center font-weight-bold"
          data-toggle="collapse"
          href="#information-card"
          aria-pressed="false"
          autocomplete="off"
        >
          <div>
            <BsFillPersonFill />
          </div>
          Perfil <br />
        </button>
        <button
          id="show-things"
          type="button"
          class="btn flex-column col-1 text-center
        font-weight-bold"
          data-toggle="collapse"
          href="#cards-container"
          aria-pressed="false"
          autocomplete="off"
        >
          <div>
            <BsCardChecklist />
          </div>
          Mostrar
          <br /> Tarefas
        </button>

        <button
          href="./html/teachermode.html"
          className="btn flex-column font-weight-bold text-center"
        >
          <div>
            <FaChalkboardTeacher />
            <i class="bi bi-person-workspace fa-lg"></i>
          </div>
          <div>
            Modo
            <br />
            Professor
          </div>
        </button>
      </Nav>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
