/** @format */

import { useState } from "react";
import { PageNavigator } from "../../atoms/interface/PageNavigator";

function CardListTop() {
  // Styling

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <div className="p-5 card-style font-semibold flex rounded-2xl w-full justify-center items-center">
      <p className="w-full text-center text-xl">
        Tasks {currentPage}/{totalPages}
      </p>
      <div className="absolute w-[calc(100%-2.5rem)] justify-center self-center ">
        <PageNavigator
          color="translucent"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          height={"100%"}
        />
      </div>
    </div>
  );
}

export default CardListTop;
