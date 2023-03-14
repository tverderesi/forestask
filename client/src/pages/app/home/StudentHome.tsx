/** @format */

import CardList from "../../../components/cardList/CardList";
import ProfileCard from "../../../components/profile/ProfileCard";
import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { GET_USER_QUERY } from "../../../util/GraphQL";
import { TreeSpinner } from "../../../atoms/interface/TreeSpinner";

export default function StudentHome() {
  const { user } = useContext(AuthContext) as any;

  // const { userData: data, {loading}] = useQuery(GET_USER_QUERY, {
  //   variables: { id: user.id },
  // }).data?.getUser;
  const { data, loading } = useQuery(GET_USER_QUERY, {
    variables: { id: user.id },
  });

  return (
    <main className="flex w-screen h-screen bg-image">
      {loading ? (
        <div className="backdrop-blur-xl bg-card bg-blend-overlay  rounded-2xl h-[calc(87vh+1rem)] w-[30vw] min-w-[350px] shadow-2xl relative top-8 ml-[5vw] flex items-center justify-center">
          <TreeSpinner />
        </div>
      ) : (
        <ProfileCard userData={data.getUser} loading={loading} />
      )}
      <CardList />
    </main>
  );
}
