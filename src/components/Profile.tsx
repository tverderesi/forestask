import { BsFillPersonFill } from "react-icons/bs";
import { Button } from "react-bootstrap";
import React from "react";

function Profile() {
    return (
      <Button variant="transparent" data-toggle="collapse" href="#information-card">
        <div className="mb-2">
          <BsFillPersonFill size="1.5em" />
        </div>
        Perfil
      </Button>
    );
  }


export default Profile;
