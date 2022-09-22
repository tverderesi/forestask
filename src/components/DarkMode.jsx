import { BsFillMoonStarsFill } from "react-icons/bs";
import { Button } from "react-bootstrap";
import React from "react";

function DarkMode() {
    return (
      <Button variant="transparent">
        <div className="mb-2">
          <BsFillMoonStarsFill size="1.3em" />
        </div>
        Noite
      </Button>
    );
  }


export default DarkMode;
