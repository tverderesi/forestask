import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { GET_USER_QUERY } from "../util/GraphQL";

export default function AdminHome() {
  const { user } = useContext(AuthContext) as any;

  const userData = useQuery(GET_USER_QUERY, {
    variables: { id: user.id },
  }).data?.getUser;

  return (
    <div className="bg-slate-300/90 w-screen h-screen backdrop-blur-3xl">
      <Profile />
    </div>
  );
}

export function Profile({}) {
  return <div></div>;
}
