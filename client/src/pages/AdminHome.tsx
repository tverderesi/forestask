import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { GET_USER_QUERY } from "../util/GraphQL";

export default function AdminHome() {
  const { user } = useContext(AuthContext) as any;

  const { loading, data } = useQuery(GET_USER_QUERY, {
    variables: { id: user.id },
  });
  console.log(loading, data);
  return (
    <div className="bg-slate-300/90 w-screen h-screen backdrop-blur-3xl">
      HIIIIIIIIIIII
      {loading ? "LOADING" : <Profile userData={data.getUser} />}
    </div>
  );
}

export function Profile({ userData }) {
  return (
    <div>
      {Object.values(userData).map((item: any, idx) => {
        return (
          <p>
            {Object.keys(userData)[idx]}:{item}
          </p>
        );
      })}
    </div>
  );
}
