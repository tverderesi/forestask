import { useQuery } from "@apollo/client";

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logout from "../../../atoms/Logout";
import { AuthContext } from "../../../context/AuthContext";
import { GET_USER_QUERY } from "../../../util/GraphQL";
import { CgProfile } from "react-icons/cg";
import Logo from "../../../atoms/Logo";

// Component for the dropdown menu item with submenus
function DropdownMenuItem() {
  return (
    <li tabIndex={0}>
      <a className="justify-between">
        Parent
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
      </a>
      <ul className="p-2">
        <li>
          <a>Submenu 1</a>
        </li>
        <li>
          <a>Submenu 2</a>
        </li>
      </ul>
    </li>
  );
}

// Component for the navigation bar
function NavigationBar({ userData }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar bg-base-100 h-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={(e) => {
              e.preventDefault();
              setOpen(!open);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <div
            className={`w-screen bg-purple-600 h-[calc(100vh-5rem)] ${
              open ? "block" : "hidden"
            } fixed left-0 bottom-0`}
          ></div>
        </div>
        <Logo className="lg:ml-0 flex-1" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <DropdownMenuItem />
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className=" w-auto lg:w-full right-2 absolute navbar-end">
        <Dropdown>
          <Avatar userData={userData} />
          <div className="card-body">
            <h3 className="card-title leading-[80%] text-night-900">
              {userData.firstName} {userData.lastName}
            </h3>
            <p className="leading-[100%]  text-sm mt-0">
              <em className="text-night-200">{userData.email}</em>
            </p>
            <p className="text-night-300">{userData.__typename}</p>

            <div className="card-actions">
              <Link to="/" className="btn btn-primary btn-sm">
                <CgProfile className="mr-1" size={"1rem"} />
                Edit Profile
              </Link>
              <Logout />
            </div>
          </div>
        </Dropdown>
      </div>
    </div>
  );
}

function Dropdown({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown dropdown-hover dropdown-end">
      <label
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
        className="transition-all h-12 w-12 btn btn-ghost rounded-full p-0"
      >
        {children[0]}
      </label>
      {isOpen && (
        <div className="dropdown-content bg-card backdrop-blur-xl  mt-2 rounded-2xl card-compact w-72 p-2 shadow bg-primary text-primary-content">
          {children.slice(1)}
        </div>
      )}
    </div>
  );
}

function Avatar({ userData: { profilePicture, firstName, lastName } }) {
  const initials = firstName[0] + lastName[0];

  return (
    <div className="avatar">
      {profilePicture ? (
        <div className="h-full rounded-full">
          <img
            src={`${process.env.REACT_APP_PUBLIC_URL}/media/avatars/${profilePicture}.jpg`}
            alt="Profile Picture"
          />
        </div>
      ) : (
        <div className="avatar placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full h-12 w-12">
            <span className="text-xl">{initials}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminHome() {
  const { user } = useContext(AuthContext) as any;

  const { loading, data } = useQuery(GET_USER_QUERY, {
    variables: { id: user.id },
  });

  return (
    <div className="bg-slate-300/10 bg-contain  w-screen h-screen">
      {loading ? "LOADING" : <Profile userData={data.getUser} />}
      <div className="h-screen w-screen bg-image bg-cover bg-bottom">
        <div className="  w-screen h-screen  backdrop-blur-[1000px] bg-card"></div>
      </div>
    </div>
  );
}

export function Profile({ userData }) {
  const [showProfile, setShowProfile] = useState(true);

  return (
    <>
      <NavigationBar userData={userData} />
    </>
  );
}
