import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { GET_USER_QUERY } from "../util/GraphQL";
import { CgProfile } from "react-icons/cg";
import { Dropdown } from "../atoms/interface/Dropdown";
import { BiPencil } from "react-icons/bi";
import { RxCardStack } from "react-icons/rx";
import { SingleTreeLoader } from "../atoms/interface/SingleTreeLoader";
import { NavigationBar } from "./NavigationBar";

export default function AdminHome() {
  const { user } = useContext(AuthContext) as any;

  const { loading, data } = useQuery(GET_USER_QUERY, {
    variables: { id: user.id },
  });

  return (
    <div className="h-screen w-screen bg-gradient-to-t from-[#b6e7fd]  via-[#ceeafd] to-[#bedfbe] overflow-y-scroll">
      {loading ? (
        <div className="navbar bg-card backdrop-blur-2xl sticky items-center justify-center  top-0  h-20 ">
          <SingleTreeLoader />
        </div>
      ) : (
        <>
          <NavigationBar userData={data.getUser}>
            <Dropdown arrow>
              <span className="flex items-center font-semibold">
                <CgProfile className="mr-1 mt-0.5 text-xl" /> Profiles
              </span>
              <div>aaaaa</div>
            </Dropdown>
            <Dropdown arrow>
              <span className="flex items-center font-semibold">
                <BiPencil className="mr-1 mt-0.5 text-xl" /> Subjects
              </span>
              <div>aaaaa</div>
            </Dropdown>
            <Dropdown arrow>
              <span className="flex items-center font-semibold">
                <RxCardStack className="mr-1 mt-0.5 text-xl" /> Cards
              </span>
              <div>aaaaa</div>
            </Dropdown>
          </NavigationBar>
        </>
      )}
      <Outlet key="outlet" />
    </div>
  );
}
