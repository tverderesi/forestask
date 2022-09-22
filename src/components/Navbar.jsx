import Nav from "react-bootstrap/Nav";
import DarkMode from "./DarkMode";
import Profile from "./Profile";
import Tasks from "./Tasks";
import TeacherMode from "./TeacherMode";

function Navbar(navItems) {
  return (
    <Nav justify className="fixed-bottom bg-light align-items-center p-2 space-around" style={{height: '10vh'}}>
    <Nav.Item>
      < DarkMode />
    </Nav.Item>
    <Nav.Item>
      <Profile />
    </Nav.Item>
    <Nav.Item>
      < Tasks/>
    </Nav.Item>
    <Nav.Item>
      < TeacherMode/>
    </Nav.Item>

    </Nav>
  );
}

export default Navbar;
