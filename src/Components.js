import { BsCardChecklist, BsFillMoonStarsFill, BsFillPersonFill, BsTreeFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { Button } from "react-bootstrap";
import React from "react";

class DarkMode extends React.Component {
  render() {
    return (
      <Button variant="transparent">
        <div className="mb-2">
          <BsFillMoonStarsFill size="1.3em" />
        </div>
        Noite
      </Button>
    );
  }
}
class Profile extends React.Component {
  render() {
    return (
      <Button variant="transparent" data-toggle="collapse" href="#information-card">
        <div className="mb-2">
          <BsFillPersonFill size="1.5em" />
        </div>
        Perfil
      </Button>
    );
  }
}
class Tasks extends React.Component {
  render() {
    return (
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
    );
  }
}
class TeacherMode extends React.Component {
  render() {
    return (
      <Button variant="transparent">
        <div className="mb-2">
          <FaChalkboardTeacher size="1.5em" />
        </div>
        Professor
      </Button>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <header className="mt-3">
        <h1 className=" d-flex align-items-center justify-content-center fw-bold">
          flores<span className="forest-green me-3">tarefa </span>
          <BsTreeFill className="forest-green" />
        </h1>
      </header>
    );
  }
}

export { DarkMode, TeacherMode, Profile, Tasks, Header };
