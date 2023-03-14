import { useQuery } from "@apollo/client";
import { Children, useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Logout from "../../../atoms/Logout";
import { AuthContext } from "../../../context/AuthContext";
import { GET_USER_QUERY } from "../../../util/GraphQL";
import { CgProfile } from "react-icons/cg";
import Logo from "../../../atoms/Logo";
import { Avatar } from "../../../atoms/interface/Avatar";
import { ElementDropdown } from "../../../atoms/interface/ElementDropdown";
import { Dropdown } from "../../../atoms/interface/Dropdown";
import { HiMenuAlt1 } from "react-icons/hi";
import { BiPencil } from "react-icons/bi";
import { RxCardStack } from "react-icons/rx";
import { TreeSpinner } from "../../../atoms/interface/TreeSpinner";

function NavigationBar({ userData, children }) {
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  const classes = `w-screen  backdrop-blur-2xl h-[calc(100vh-5rem)] ${
    open ? "" : "hidden"
  } fixed left-0 top-20 flex flex-col  menu gap-4 p-4  bg-card w-auto transition-all`;

  return (
    <div className="navbar bg-card backdrop-blur-2xl sticky  top-0  h-20 transition-all">
      <div className="navbar-start max-lg:flex-grow w-1/4 transition-all">
        <div className="lg:hidden">
          <label tabIndex={0} className="btn btn-ghost" onClick={handleClick}>
            <HiMenuAlt1 className="text-lg" />
          </label>
          <div className={classes}>
            <h3 className="text-center text-2xl font-semibold text-magenta-dye">
              {userData.__typename} Mode
            </h3>
            {children.map((child) => {
              return (
                <div
                  tabIndex={0}
                  className="collapse collapse-arrow border-y-base-300 bg-slate-400/10 rounded-2xl"
                >
                  <div className="collapse-title text-xl font-medium">
                    {child.props.children[0]}
                  </div>
                  <div className="collapse-content ">
                    {child.props.children.slice(1)}
                  </div>
                </div>
              );
            })}
            <div className="bg-slate-400/10 rounded-2xl absolute bottom-4 p-4 w-[calc(100vw-2rem)] grid grid-cols-5 grid-rows-1 gap-2 items-center">
              <div className="row-span-2 col-span-1">
                <Avatar userData={userData} className="h-16 mr-1" />
              </div>

              <div className="col-span-4 ">
                <h3 className="card-title text-night-900">
                  {userData.firstName} {userData.lastName}
                </h3>

                <div className="w-full flex gap-4 mt-2">
                  <Link
                    to="/app/home/profile"
                    className="btn btn-primary btn-sm"
                  >
                    <CgProfile className="mr-1" size={"1rem"} />
                    Edit Profile
                  </Link>
                  <Logout />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Logo className="lg:ml-0" />
      </div>
      <div className="navbar-center hidden lg:flex lg:flex-grow justify-center w-auto transition-all">
        <ul className="menu menu-horizontal px-1 flex-nowrap">
          {Children.map(children, (child) =>
            typeof child === "object" &&
            child.type.name === "ElementDropdown" ? (
              child
            ) : (
              <li tabIndex={0}>{child}</li>
            )
          )}
        </ul>
      </div>
      <div className="navbar-end  max-lg:w-[51.6px] w-1/4 h-full">
        <ElementDropdown
          position="bottom"
          align="end"
          className="max-lg:hidden"
        >
          <Avatar userData={userData} />
          <div className="dropdown-content bg-card backdrop-blur-xl  mt-2 rounded-2xl card-compact w-72 p-2 shadow bg-primary text-primary-content">
            <div className="card-body">
              <h3 className="card-title leading-[80%] text-night-900">
                {userData.firstName} {userData.lastName}
              </h3>
              <p className="leading-[100%]  text-sm mt-0">
                <em className="text-night-200">{userData.email}</em>
              </p>
              <p className="text-night-300">{userData.__typename}</p>

              <div className="card-actions">
                <Link to="/app/home/profile" className="btn btn-primary btn-sm">
                  <CgProfile className="mr-1" size={"1rem"} />
                  Edit Profile
                </Link>
                <Logout />
              </div>
            </div>
          </div>
        </ElementDropdown>
      </div>
    </div>
  );
}

export default function AdminHome() {
  const { user } = useContext(AuthContext) as any;

  const { loading, data } = useQuery(GET_USER_QUERY, {
    variables: { id: user.id },
  });

  return (
    <div className="h-screen w-screen bg-gradient-to-t from-[#b6e7fd]  via-[#ceeafd] to-[#bedfbe] overflow-y-scroll">
      {loading ? (
        <div className="navbar bg-card backdrop-blur-2xl sticky items-center justify-center  top-0  h-20 ">
          <TreeSpinner />
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
