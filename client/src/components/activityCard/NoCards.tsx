/** @format */

import { GiPartyPopper } from "react-icons/gi";

export default function NoCards() {
  return (
    <div className="flex content-center items-center  mt-4 backdrop-blur-2xl  h-28 bg-card rounded-2xl shadow-2xl text-center mx-2 lg:mx-0">
      <p className="font-semibold text-center w-7/10 text-xl px-10">
        No Activities found for these filters. Hooray!
      </p>
      <GiPartyPopper className="ms-3 opacity-20 absolute right-4" size={70} />
    </div>
  );
}
