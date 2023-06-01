import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import AdminHome from "../../organisms/AdminHome";
import NotFound from "../NotFound";
import StudentHome from "../../organisms/StudentHome";
import TeacherHome from "../../organisms/TeacherHome";

const AppHome = () => {
  const { user } = useContext(AuthContext) as any;
  console.log(user.privilegeLevel === "STUDENT");

  switch (true) {
    case user.privilegeLevel === "ADMIN":
      return <AdminHome />;
    case user.privilegeLevel === "TEACHER":
      return <TeacherHome />;
    case user.privilegeLevel === "STUDENT":
      return <StudentHome />;
    default:
      return <NotFound />;
  }
};

export default AppHome;
