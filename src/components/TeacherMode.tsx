import { FaChalkboardTeacher } from "react-icons/fa";
import { Button } from "react-bootstrap";
import React from "react";

function TeacherMode() {
    return (
      <Button variant="transparent">
        <div className="mb-2">
          <FaChalkboardTeacher size="1.5em" />
        </div>
        Professor
      </Button>
    );
  }

export default TeacherMode
