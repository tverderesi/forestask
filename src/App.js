import { BsCardChecklist, BsFillMoonStarsFill, BsFillPersonFill, BsTreeFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url("./media/4.png")`,
        height: "100vh",
        margin: "0",
        overflow: "hidden",
        backgroundSize: "cover",
        backgroundPosition: "0 100vh",
      }}
    >
      <header className="mt-3">
        <h1 className=" d-flex align-items-center justify-content-center fw-bold">
          flores<span className="forest-green me-3">tarefa </span>
          <BsTreeFill className="forest-green" />
        </h1>
      </header>

      {/* <Nav >
        <Nav.Item>
          <Button variant="transparent">
            <div className="mb-2">
              <BsFillMoonStarsFill size="1.3em" />
            </div>
            Noite
          </Button>{" "}
        </Nav.Item>
        <Nav.Item>
          {" "}
          <Button variant="transparent" data-toggle="collapse" href="#information-card">
            <div className="mb-2">
              <BsFillPersonFill size="1.5em" />
            </div>
            Perfil
          </Button>
        </Nav.Item>

        <Nav.Item>
          <Button
            id="show-things"
            type="button"
            variant="transparent"
            data-toggle="collapse"
            href="#cards-container"
            aria-pressed="false"
            autocomplete="off"
          >
            <div className="mb-2">
              <BsCardChecklist size="1.5em" />
            </div>
            Tarefas
          </Button>
        </Nav.Item>
        <Nav.Item>
          <Button href="./html/teachermode.html" variant="transparent">
            <div className="mb-2">
              <FaChalkboardTeacher size="1.5em" />
            </div>
            Professor
          </Button>
        </Nav.Item>
      </Nav>*/}
    </div>
  );
}

export default App;
