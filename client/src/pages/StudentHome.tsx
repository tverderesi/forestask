/** @format */

import CardList from "../components/cardList/CardList";
import ProfileCard from "../components/profile/ProfileCard";
import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { GET_USER_QUERY } from "../util/GraphQL";

export default function StudentHome() {
  const { user } = useContext(AuthContext) as any;

  // const { userData: data, {loading}] = useQuery(GET_USER_QUERY, {
  //   variables: { id: user.id },
  // }).data?.getUser;
  const { data, loading } = useQuery(GET_USER_QUERY, {
    variables: { id: user.id },
  });

  return (
    <main className="flex justify-center items-center w-screen h-screen">
      {loading ? <h1>LOADING</h1> : <ProfileCard userData={data.getUser} />}
      <CardList />
    </main>
  );
}
