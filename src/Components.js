import { BsCardChecklist, BsFillMoonStarsFill, BsFillPersonFill } from "react-icons/bs";
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
      <Button href="./html/teachermode.html" variant="transparent">
        <div className="mb-2">
          <FaChalkboardTeacher size="1.5em" />
        </div>
        Professor
      </Button>
    );
  }
}

export { DarkMode, TeacherMode, Profile, Tasks };
