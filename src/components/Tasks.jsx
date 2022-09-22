import { BsCardChecklist } from "react-icons/bs";
import { Button } from "react-bootstrap";
import React from "react";

function Tasks() {

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

  export default Tasks
